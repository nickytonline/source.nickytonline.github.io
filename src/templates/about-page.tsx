import React from 'react';
import { graphql } from 'gatsby';
import { Content, HTMLContent, Layout, PageTitle } from 'components';
import { MarkdownRemark } from 'types/markdown-remark';
import { PageTemplateProps } from './page-template-props';

export type AboutPageTemplateProps = PageTemplateProps;

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient section--about-me">
      <div className="container">
        <PageTitle>{title}</PageTitle>
        <PageContent className="content" content={content} />
      </div>
    </section>
  );
};

export type AboutPageProps = {
  data: {
    markdownRemark: MarkdownRemark;
  };
};

const AboutPage: React.FC<AboutPageProps> = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

// Leaving this as a default export because it's instantiated via gatsby-node.js
export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
