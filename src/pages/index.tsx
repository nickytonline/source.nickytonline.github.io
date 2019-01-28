import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout, PageTitle, Section, Container } from 'components';
import { AllMarkdownRemark } from 'types/all-markdown-remark';
import styles from './index.module.scss';

export interface IndexPageProps {
    data: {
        allMarkdownRemark: AllMarkdownRemark;
    };
}

export default class IndexPage extends React.PureComponent<IndexPageProps, {}> {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <Layout>
                <Section className={styles.mainBackground}>
                    <Container>
                        <PageTitle>Latest Posts</PageTitle>
                        {posts.map(({ node: post }) => (
                            <div className="content" key={post.id}>
                                <h2>
                                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                                </h2>
                                <div className={styles.postDate}>{post.frontmatter.date}</div>
                                <p>{post.excerpt}</p>
                            </div>
                        ))}
                    </Container>
                </Section>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
