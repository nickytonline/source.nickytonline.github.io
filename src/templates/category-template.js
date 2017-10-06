import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Sidebar from '../components/Sidebar';
import CategoryTemplateDetails from '../components/CategoryTemplateDetails';

class CategoryTemplate extends React.Component {
  render() {
    const { title } = this.props.data.site.siteMetadata;
    const { category } = this.props.pathContext;

    return (
      <div>
        <Helmet title={`${category} - ${title}`} />
        <Sidebar {...this.props} />
        <CategoryTemplateDetails {...this.props} />
      </div>
    );
  }
}

CategoryTemplate.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    })
  }),
  pathContext: PropTypes.shape({
    category: PropTypes.string.isRequired
  })
};

export default CategoryTemplate;

export const pageQuery = graphql`
  query CategoryPage($category: String) {
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
        }
      }
    }
    allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { category: { eq: $category }, layout: { eq: "post" }, draft: { ne: true } } },
        sort: { order: DESC, fields: [frontmatter___date] }
      ){
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
