import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ThanksPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient section--thanks">
      <div className="container">
        <h1 className="title">{title}</h1>
        <PageContent className="content" content={content} />
      </div>
    </section>
  );
};

ThanksPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ThanksPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ThanksPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ThanksPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ThanksPage;

export const thanksPageQuery = graphql`
  query ThanksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
