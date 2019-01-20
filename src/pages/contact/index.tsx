import React from 'react';
import { Layout } from 'components';

const Index: React.FC<{}> = () => (
  <Layout>
    <section className="section section--contact">
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
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
