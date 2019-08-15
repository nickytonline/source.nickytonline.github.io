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

import styles from './contact-page.module.scss';
import commonStyles from './common-page.module.scss';

export type ContactPageTemplateProps = PageTemplateProps;

export const ContactPageTemplate: React.FC<
ContactPageTemplateProps
> = React.memo(({ title, content, contentComponent }) => {
    const PageContent = contentComponent || Content;

    return (
        <Section
            className={`${styles.contactBackground} ${commonStyles.commonPage}`}
        >
            <Container>
                <PageTitle>{title}</PageTitle>
                <PageContent className="content" content={content} />
            </Container>
        </Section>
    );
});

ContactPageTemplate.displayName = 'ContactPageTemplate';

export interface ContactPageProps {
    data: {
        markdownRemark: {
            frontmatter: {
                title: string;
            };
            html: string;
        };
    };
}

const ContactPage: React.FC<ContactPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <ContactPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

ContactPage.displayName = 'ContactPage';

// Leaving this as a default export because it's instantiated via gatsby-node.js
export default ContactPage;

export const ContactPageQuery = graphql`
    query ContactPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
