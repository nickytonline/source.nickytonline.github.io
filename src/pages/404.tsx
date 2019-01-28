import React from 'react';
import { Layout, PageTitle, Section } from 'components';

import styles from './404.module.scss';

const NotFoundPage: React.FC<{}> = () => (
    <Layout>
        <Section className={styles.notFoundBackground}>
            <div className="container">
                <PageTitle>NOT FOUND</PageTitle>
                <p>Looks like this page is missing or does not exist.</p>
            </div>
        </Section>
    </Layout>
);

export default NotFoundPage;
