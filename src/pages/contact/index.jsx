import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Index = () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          Wanna get in touch? Drop me an e-mail at nick at iamdeveloper dot com.
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
