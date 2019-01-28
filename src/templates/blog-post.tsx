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
} from 'components';
import { MarkdownRemark } from 'types/markdown-remark';
import { PageTemplateProps } from './page-template-props';
import styles from './blog-post.module.scss';

export type BlogPostTemplateProps = PageTemplateProps & {
    description: string;
    tags: string[];
    date: string;
    helmet?: React.ReactNode;
};

export const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
    content,
    contentComponent,
    description,
    tags,
    title,
    date,
    helmet = '',
}) => {
    const PostContent = contentComponent || Content;

    return (
        <Section>
            {helmet}
            <div className="container content">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className={styles.postDate}>{date}</div>
                        <PageTitle>{title}</PageTitle>
                        <div className={styles.postDescription}>{description}</div>
                        <PostContent className={styles.postContent} content={content} />
                        {tags && tags.length ? (
                            <div className={styles.tagContainer}>
                                <h4>Tags</h4>
                                <ul className={styles.tagList}>
                                    {tags.map(tag => (
                                        <li key={`${tag}tag`}>
                                            <BlogTag url={`/tags/${kebabCase(tag)}/`} name={tag} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export interface BlogPostProps {
    data: {
        markdownRemark: MarkdownRemark;
    };
}

const BlogPost: React.FC<BlogPostProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
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
            />
        </Layout>
    );
};

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
        description
        tags
      }
    }
  }
`;
