import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { Layout, Section, Container } from 'components';
import { SiteMetaData } from 'types/site-meta-data';
import { AllMarkdownRemark } from 'types/all-markdown-remark';

import styles from './tags.module.scss';

export interface TagRouteProps {
    data: {
        allMarkdownRemark: AllMarkdownRemark;
        site: {
            siteMetadata: SiteMetaData;
        };
    };
    pageContext: {
        tag: string;
    };
}

const TagRoute: React.FC<TagRouteProps> = React.memo(
    ({ data, pageContext }) => {
        const posts = data.allMarkdownRemark.edges;
        const postLinks = posts.map(post => (
            <li key={post.node.fields.slug}>
                <Link className={styles.postLink} to={post.node.fields.slug}>
                    {post.node.frontmatter.title}
                </Link>
            </li>
        ));
        const tag = pageContext.tag;
        const title = data.site.siteMetadata.title;
        const totalCount = data.allMarkdownRemark.totalCount;
        const tagHeader = `${totalCount} post${
            totalCount === 1 ? '' : 's'
        } tagged with “${tag}”`;

        return (
            <Layout slug={`/tags/${tag}/`}>
                <Section>
                    <Helmet title={`${tag} | ${title}`} />
                    <Container className="content">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <h3 data-cy="tag-header">{tagHeader}</h3>
                                <ul
                                    className={styles.postList}
                                    data-cy="post-list"
                                >
                                    {postLinks}
                                </ul>
                                <Link
                                    className={styles.browseAllTags}
                                    to="/tags/"
                                    data-cy="browse-all-tags"
                                >
                                    Browse all tags
                                </Link>
                            </div>
                        </div>
                    </Container>
                </Section>
            </Layout>
        );
    },
);

TagRoute.displayName = 'TagRoute';

// Leaving this as a default export because it's instantiated via gatsby-node.js
export default TagRoute;

export const tagPageQuery = graphql`
    query TagPage($tag: String) {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`;
