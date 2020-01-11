import React from 'react';
import { graphql } from 'gatsby';
import {
    Content,
    HTMLContent,
    Layout,
    PageTitle,
    Section,
    Container,
} from 'components';
import { PageTemplateProps } from './page-template-props';

import styles from './uses-page.module.scss';
import commonStyles from './common-page.module.scss';

export type UsesPageTemplateProps = PageTemplateProps;

export const UsesPageTemplate: React.FC<UsesPageTemplateProps> = React.memo(
    ({ title, content, contentComponent }) => {
        const PageContent = contentComponent || Content;

        return (
            <Section
                className={`${styles.usesBackground} ${commonStyles.commonPage}`}
            >
                <Container>
                    <PageTitle>{title}</PageTitle>
                    <PageContent
                        className={`content ${styles.uses}`}
                        content={content}
                    />
                </Container>
            </Section>
        );
    },
);

UsesPageTemplate.displayName = 'usesPageTemplate';

export interface UsesPageProps {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
            };
            html: string;
        };
    };
}

const UsesPage: React.FC<UsesPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout slug="/uses/">
            <UsesPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

UsesPage.displayName = 'usesPage';

// Leaving this as a default export because it's instantiated via gatsby-node.js
export default UsesPage;

export const usesPageQuery = graphql`
    query UsessPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
