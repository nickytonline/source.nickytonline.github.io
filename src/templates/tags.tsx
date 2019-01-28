import React from 'react';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { Layout, Section } from 'components';
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

class TagRoute extends React.Component<TagRouteProps, {}> {
    render() {
        const posts = this.props.data.allMarkdownRemark.edges;
        const postLinks = posts.map(post => (
            <li key={post.node.fields.slug}>
                <Link className={styles.postLink} to={post.node.fields.slug}>
                    {post.node.frontmatter.title}
                </Link>
            </li>
        ));
        const tag = this.props.pageContext.tag;
        const title = this.props.data.site.siteMetadata.title;
        const totalCount = this.props.data.allMarkdownRemark.totalCount;
        const tagHeader = `${totalCount} post${
            totalCount === 1 ? '' : 's'
        } tagged with “${tag}”`;

        return (
            <Layout>
                <Section>
                    <Helmet title={`${tag} | ${title}`} />
                    <div className="container content">
                        <div className="columns">
                            <div className="column is-10 is-offset-1">
                                <h3>{tagHeader}</h3>
                                <ul className={styles.postList}>{postLinks}</ul>
                                <Link className={styles.browseAllTags} to="/tags/">
                  Browse all tags
                                </Link>
                            </div>
                        </div>
                    </div>
                </Section>
            </Layout>
        );
    }
}

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
