import React from 'react';
import { Layout, PageTitle, Section, Container } from 'components';

import styles from './index.module.scss';

const Index: React.FC<{}> = () => (
    <Layout>
        <Section className={styles.contactBackground}>
            <Container>
                <div className="content">
                    <PageTitle>Contact</PageTitle>
                    <p>
            Wanna get in touch? Drop me an e-mail at nick at iamdeveloper dot
            com.
                    </p>
                </div>
            </Container>
        </Section>
    </Layout>
);

export default Index;
