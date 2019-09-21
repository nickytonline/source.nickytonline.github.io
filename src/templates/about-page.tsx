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
import { MarkdownRemark } from 'types/markdown-remark';
import { PageTemplateProps } from './page-template-props';

import styles from './about-page.module.scss';
import commonStyles from './common-page.module.scss';

export type AboutPageTemplateProps = PageTemplateProps;

export const AboutPageTemplate: React.FC<AboutPageTemplateProps> = React.memo(
    ({ title, content, contentComponent }) => {
        const PageContent = contentComponent || Content;

        return (
            <Section
                className={`${styles.aboutBackground} ${commonStyles.commonPage}`}
            >
                <Container>
                    <PageTitle>{title}</PageTitle>
                    <PageContent
                        className={`content ${styles.about}`}
                        content={content}
                    />
                </Container>
            </Section>
        );
    },
);

export interface AboutPageProps {
    data: {
        markdownRemark: MarkdownRemark;
    };
}

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

AboutPageTemplate.displayName = 'AboutPageTemplate';

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
