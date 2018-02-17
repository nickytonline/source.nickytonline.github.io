import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import Sidebar from "../components/Sidebar";
import TagTemplateDetails from "../components/TagTemplateDetails";

class TagTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { tag } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`All Posts tagged as "${tag}" - ${title}`} />
        <Sidebar {...this.props} />
        <TagTemplateDetails {...this.props} />
      </div>
    );
  }
}

TagTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  }),
  pathContext: PropTypes.shape({
    tag: PropTypes.string.isRequired
  })
};

export default TagTemplate;

export const pageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          linkedin
          twitter
          github
          stackoverflow
          devto
        }
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: {
        frontmatter: {
          tags: { in: [$tag] }
          layout: { eq: "post" }
          draft: { ne: true }
        }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          fields {
            slug
            categorySlug
          }
          frontmatter {
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
