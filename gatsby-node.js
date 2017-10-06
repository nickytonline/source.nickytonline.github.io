const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const lost = require('lost');
const pxtorem = require('postcss-pxtorem');
const slash = require('slash');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post-template.js');
    const pageTemplate = path.resolve('./src/templates/page-template.js');
    const tagTemplate = path.resolve('./src/templates/tag-template.js');
    const categoryTemplate = path.resolve('./src/templates/category-template.js');

    graphql(
      `
    {
      allMarkdownRemark(
        limit: 1000,
        filter: { frontmatter: { draft: { ne: true } } },
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              layout
              category
            }
          }
        }
      }
    }
  `
    ).then((result) => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      _.each(result.data.allMarkdownRemark.edges, (edge) => {
        if (_.get(edge, 'node.frontmatter.layout') === 'page') {
          createPage({
            path: edge.node.fields.slug,
            component: slash(pageTemplate),
            context: {
              slug: edge.node.fields.slug
            }
          });
        } else if (_.get(edge, 'node.frontmatter.layout') === 'post') {
          createPage({
            path: edge.node.fields.slug,
            component: slash(postTemplate),
            context: {
              slug: edge.node.fields.slug
            }
          });

          let tags = [];
          if (_.get(edge, 'node.frontmatter.tags')) {
            tags = tags.concat(edge.node.frontmatter.tags);
          }

          tags = _.uniq(tags);
          _.each(tags, (tag) => {
            const tagPath = `/tags/${_.kebabCase(tag)}/`;
            createPage({
              path: tagPath,
              component: tagTemplate,
              context: {
                tag
              }
            });
          });

          let categories = [];
          if (_.get(edge, 'node.frontmatter.category')) {
            categories = categories.concat(edge.node.frontmatter.category);
          }

          categories = _.uniq(categories);
          _.each(categories, (category) => {
            const categoryPath = `/categories/${_.kebabCase(category)}/`;
            createPage({
              path: categoryPath,
              component: categoryTemplate,
              context: {
                category
              }
            });
          });
        }
      });

      resolve();
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'File') {
    const parsedFilePath = path.parse(node.absolutePath);
    const slug = `/${parsedFilePath.dir.split('---')[1]}/`;
    createNodeField({ node, name: 'slug', value: slug });
  } else if (
    node.internal.type === 'MarkdownRemark' &&
    typeof node.slug === 'undefined'
  ) {
    const fileNode = getNode(node.parent);
    let slug = fileNode.fields.slug;
    if (typeof node.frontmatter.path !== 'undefined') {
      slug = node.frontmatter.path;
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug
    });

    if (typeof node.frontmatter.tags !== 'undefined') {
      const tagSlugs = node.frontmatter.tags.map(
        tag => `/tags/${_.kebabCase(tag)}/`
      );
      createNodeField({ node, name: 'tagSlugs', value: tagSlugs });
    }

    if (typeof node.frontmatter.category !== 'undefined') {
      const categorySlug = `/categories/${_.kebabCase(node.frontmatter.category)}/`;
      createNodeField({ node, name: 'categorySlug', value: categorySlug });
    }
  }
};

exports.modifyWebpackConfig = ({ config }) => {
  config.merge({
    postcss: [
      lost(),
      pxtorem({
        rootValue: 16,
        unitPrecision: 5,
        propList: [
          'font',
          'font-size',
          'line-height',
          'letter-spacing',
          'margin',
          'margin-top',
          'margin-left',
          'margin-bottom',
          'margin-right',
          'padding',
          'padding-top',
          'padding-left',
          'padding-bottom',
          'padding-right',
          'border-radius',
          'width',
          'max-width'
        ],
        selectorBlackList: [],
        replace: true,
        mediaQuery: false,
        minPixelValue: 0
      })
    ]
  });
};
