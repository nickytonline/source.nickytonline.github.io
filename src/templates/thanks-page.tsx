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

import styles from './thanks-page.module.scss';
import commonStyles from './common-page.module.scss';

export type ThanksPageTemplateProps = PageTemplateProps;

export const ThanksPageTemplate: React.FC<ThanksPageTemplateProps> = React.memo(
    ({ title, content, contentComponent }) => {
        const PageContent = contentComponent || Content;

        return (
            <Section
                className={`${styles.thanksBackground} ${commonStyles.commonPage}`}
            >
                <Container>
                    <PageTitle>{title}</PageTitle>
                    <PageContent
                        className={`content ${styles.thanks}`}
                        content={content}
                    />
                </Container>
            </Section>
        );
    },
);

ThanksPageTemplate.displayName = 'ThanksPageTemplate';

export interface ThanksPageProps {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
            };
            html: string;
        };
    };
}

const ThanksPage: React.FC<ThanksPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout slug="/thanks/">
            <ThanksPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

ThanksPage.displayName = 'ThanksPage';

// Leaving this as a default export because it's instantiated via gatsby-node.js
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
