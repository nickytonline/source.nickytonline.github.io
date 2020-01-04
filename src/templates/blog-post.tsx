import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import {
    Content,
    HTMLContent,
    Layout,
    BlogTag,
    PageTitle,
    Section,
    Container,
    SocialLinks,
} from 'components';
import { MarkdownRemark } from 'types/markdown-remark';
import { PageTemplateProps } from './page-template-props';
import styles from './blog-post.module.scss';

export type BlogPostTemplateProps = PageTemplateProps & {
    description: string;
    tags: string[];
    date: string;
    devtoLink?: string;
    helmet?: React.ReactNode;
};

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = React.memo(
    ({
        content,
        contentComponent,
        description,
        tags,
        title,
        date,
        devtoLink,
        helmet = '',
    }) => {
        const PostContent = contentComponent || Content;
        // Should never be an empty string. This is just for building the site as Gatsby builds it in a node environment.
        // Real solution is to pass in the built URL.
        const url =
            typeof window !== 'undefined' ? window.location.toString() : '';

        return (
            <Section>
                {helmet}
                <Container className="content">
                    <div className="columns">
                        <div className="column is-10 is-offset-1">
                            <div className={styles.postDate}>{date}</div>
                            <PageTitle>{title}</PageTitle>
                            <ul className={styles.metaData}>
                                {devtoLink ? (
                                    <li className={styles.devtoLink}>
                                        <a href={devtoLink}>
                                            Post also available on dev.to
                                        </a>
                                    </li>
                                ) : null}

                                <li className={styles.postDescription}>
                                    {description}
                                </li>
                            </ul>
                            <SocialLinks
                                className={styles.socialLinks}
                                message={title}
                                url={url}
                                tags={tags}
                            />
                            <PostContent
                                className={styles.postContent}
                                content={content}
                            />
                            <SocialLinks
                                className={styles.socialLinksBottom}
                                message={title}
                                url={url}
                                tags={tags}
                            />
                            {tags && tags.length ? (
                                <div className={styles.tagContainer}>
                                    <h4>Tags</h4>
                                    <ul className={styles.tagList}>
                                        {tags.map(tag => (
                                            <li key={`${tag}tag`}>
                                                <BlogTag
                                                    url={`/tags/${kebabCase(
                                                        tag,
                                                    )}/`}
                                                    name={tag}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </Container>
            </Section>
        );
    },
);

export interface BlogPostProps {
    data: {
        markdownRemark: MarkdownRemark;
    };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout slug={post.fields.slug}>
            <BlogPostTemplate
                content={post.html}
                contentComponent={HTMLContent}
                description={post.frontmatter.description}
                date={post.frontmatter.date}
                helmet={
                    <Helmet titleTemplate="%s | Blog">
                        <title>{`${post.frontmatter.title}`}</title>
                        <meta
                            name="description"
                            content={`${post.frontmatter.description}`}
                        />
                    </Helmet>
                }
                tags={post.frontmatter.tags}
                title={post.frontmatter.title}
                devtoLink={post.frontmatter.devto_link}
            />
        </Layout>
    );
};

BlogPostTemplate.displayName = 'BlogPostTemplate';

// Leaving this as a default export because it's instantiated via gatsby-node.js
export default BlogPost;

export const pageQuery = graphql`
    query BlogPostByID($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                devto_link
                description
                tags
            }

            fields {
                slug
            }
        }
    }
`;
