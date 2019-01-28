import React from 'react';
import { Layout, PageTitle, Section } from 'components';

const Index: React.FC<{}> = () => (
    <Layout>
        <Section className="section--contact">
            <div className="container">
                <div className="content">
                    <PageTitle>Contact</PageTitle>
                    <p>
            Wanna get in touch? Drop me an e-mail at nick at iamdeveloper dot
            com.
                    </p>
                </div>
            </div>
        </Section>
    </Layout>
);

export default Index;
