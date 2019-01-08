import React from 'react';
import Layout from '../../components/Layout';

const Index = () => (
  <Layout>
    <section className="section section--contact">
      <div className="container">
        <div className="content">
          <h1>Contact</h1>
          <ul className="social-icons">
            <li>
              <a
                href="https://twitter.com/nickytonline"
                aria-label="Twitter account for nickytonline"
              >
                <i className="icon icon--twitter" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nickytonline"
                aria-label="Github account for nickytonline"
              >
                <i className="icon icon--github" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nickytonline"
                aria-label="LinkedIn account for nickytonline"
              >
                <span className="icon icon--linkedin" />
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/nickytonline"
                aria-label="dev.to account for nickytonline"
              >
                <span className="icon icon--devto" />
              </a>
            </li>
            <li>
              <a
                href="https://stackoverflow.com/users/77814/nickytonline"
                aria-label="Stack Overflow account for nickytonline"
              >
                <span className="icon icon--stackoverflow" />
              </a>
            </li>
            <li>
              <a
                href="https://toot.cafe/@nickytonline"
                aria-label="Mastodon account for nickytonline"
              >
                <span className="icon icon--mastodon" />
              </a>
            </li>
          </ul>
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
