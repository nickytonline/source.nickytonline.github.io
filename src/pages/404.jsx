import React from 'react';
import Layout from '../components/Layout';

const NotFoundPage = () => (
  <Layout>
    <section className="section section--not-found">
      <div className="container">
        <h1 className="title is-size-3 has-text-weight-bold is-bold-light">
          NOT FOUND
        </h1>
        <p>Looks like this page is missing or doesn't exist!</p>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
