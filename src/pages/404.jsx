import React from 'react';
import { Layout } from 'components';

const NotFoundPage = () => (
  <Layout>
    <section className="section section--not-found">
      <div className="container">
        <h1 className="title">NOT FOUND</h1>
        <p>Looks like this page is missing or does not exist.</p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
