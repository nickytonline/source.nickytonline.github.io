import React from 'react';
import { Layout, PageTitle } from 'components';

const NotFoundPage: React.FC<{}> = () => (
  <Layout>
    <section className="section section--not-found">
      <div className="container">
        <PageTitle>NOT FOUND</PageTitle>
        <p>Looks like this page is missing or does not exist.</p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
