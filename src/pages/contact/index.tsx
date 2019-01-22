import React from 'react';
import { Layout, PageTitle } from 'components';

const Index: React.FC<{}> = () => (
  <Layout>
    <section className="section section--contact">
      <div className="container">
        <div className="content">
          <PageTitle>Contact</PageTitle>
          <p>
            Wanna get in touch? Drop me an e-mail at nick at iamdeveloper dot
            com.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
