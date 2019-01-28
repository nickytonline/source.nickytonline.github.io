import React from 'react';
import { kebabCase } from 'lodash';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import { Layout, BlogTag, PageTitle } from 'components';
import { AllMarkdownRemark } from 'types/all-markdown-remark';
import { SiteMetaData } from 'types/site-meta-data';

import styles from './index.module.scss';

export interface TagsPageProps {
    data: {
        allMarkdownRemark: AllMarkdownRemark;
        site: {
            siteMetadata: SiteMetaData;
        };
    };
}

const TagsPage: React.FC<TagsPageProps> = ({
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
}) => (
    <Layout>
        <section className="section">
            <Helmet title={`Tags | ${title}`} />
            <div className="container content">
                <div className="columns">
                    <div
                        className="column is-10 is-offset-1"
                        style={{ marginBottom: '6rem' }}
                    >
                        <PageTitle>Tags</PageTitle>
                        <ul className="taglist">
                            {group.map(tag => (
                                <li key={tag.fieldValue}>
                                    <BlogTag
                                        url={`/tags/${kebabCase(tag.fieldValue)}/`}
                                        name={tag.fieldValue}
                                        totalCount={tag.totalCount}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
