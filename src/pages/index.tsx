import React from 'react';
import { Link, graphql } from 'gatsby';
import { Layout } from 'components';
import { AllMarkdownRemark } from 'types/all-markdown-remark';

export type IndexPageProps = {
  data: {
    allMarkdownRemark: AllMarkdownRemark;
  };
};

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section className="section section--blog-posts">
          <div className="container">
            {posts.map(({ node: post }) => (
              <div className="content content--front-page" key={post.id}>
                <h2>
                  <Link className="blog-title" to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                  <span> &bull; </span>
                  <small>{post.frontmatter.date}</small>
                </h2>
                <p>{post.excerpt}</p>
                <Link
                  className="button button--read-more"
                  to={post.fields.slug}
                  role="button"
                >
                  Keep Reading →
                </Link>
              </div>
            ))}
          </div>
        </section>
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
