import React from 'react';
import './style.scss';
import '../../assets/fonts/fontello-771c82e0/css/fontello.css';

class Links extends React.Component {
  render() {
    const author = this.props.data;
    const links = {
      stackoverflow: author.stackoverflow,
      twitter: author.twitter,
      github: author.github,
      linkedin: author.linkedin,
      devto: author.devto,
      mastodon: author.mastodon,
      rss: author.rss,
      email: author.email
    };

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="me noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="me noopener noreferrer"
            >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://linkedin.com/in/${links.linkedin}`}
              target="_blank"
              rel="me noopener noreferrer"
            >
              <i className="icon-linkedin" />
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={links.stackoverflow}
              target="_blank"
              rel="me noopener noreferrer"
            >
              <i className="icon-stackoverflow" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`${links.devto}`}
              target="_blank"
              rel="me noopener noreferrer"
              className="icon-devto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1"
                width="80%"
                height="80%"
                viewBox="0 0 132.000000 65.000000"
                className="icon-devto__content"
              >
                <path d="M0 33v32h11.3c12.5 0 17.7-1.6 21.5-6.5 3.8-4.8 4.4-9 4-28-.3-16.8-.5-18.2-2.7-21.8C30.3 2.5 26.1 1 12 1H0v32zm23.1-19.1c2.3 1.9 2.4 2.3 2.4 18.5 0 15.7-.1 16.7-2.2 18.8-1.7 1.6-3.5 2.2-7 2.2l-4.8.1-.3-20.8L11 12h4.9c3.3 0 5.6.6 7.2 1.9zM46.1 3.6c-2 2.6-2.1 3.9-2.1 29.6v26.9l2.5 2.4c2.3 2.4 2.9 2.5 16 2.5H76V54.1l-10.2-.3-10.3-.3v-15l6.3-.3 6.2-.3V27H55V12h21V1H62.1c-13.9 0-14 0-16 2.6zM87 15.2c2.1 7.9 5.5 20.8 7.6 28.8 3.2 12.3 4.3 15 7 17.7 1.9 2 4.2 3.3 5.7 3.3 3.1 0 7.1-3.1 8.5-6.7 1-2.6 15.2-55.6 15.2-56.8 0-.3-2.8-.5-6.2-.3l-6.3.3-5.6 21.5c-3.5 13.6-5.8 20.8-6.2 19.5C105.9 40 96 1.9 96 1.4c0-.2-2.9-.4-6.4-.4h-6.4L87 15.2z" />
              </svg>
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`${links.mastodon}`}
              target="_blank"
              rel="me noopener noreferrer"
              className="icon-mastodon"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                className="icon-mastodon__content"
              >
                <title>Mastodon icon</title>
                <path d="M23.193 7.879c0-5.206-3.411-6.732-3.411-6.732C18.062.357 15.108.025 12.041 0h-.076c-3.068.025-6.02.357-7.74 1.147 0 0-3.411 1.526-3.411 6.732 0 1.192-.023 2.618.015 4.129.124 5.092.934 10.109 5.641 11.355 2.17.574 4.034.695 5.535.612 2.722-.15 4.25-.972 4.25-.972l-.09-1.975s-1.945.613-4.129.539c-2.165-.074-4.449-.233-4.799-2.891a5.499 5.499 0 0 1-.048-.745s2.125.52 4.817.643c1.646.075 3.19-.097 4.758-.283 3.007-.359 5.625-2.212 5.954-3.905.517-2.665.475-6.507.475-6.507zm-4.024 6.709h-2.497V8.469c0-1.29-.543-1.944-1.628-1.944-1.2 0-1.802.776-1.802 2.312v3.349h-2.483v-3.35c0-1.536-.602-2.312-1.802-2.312-1.085 0-1.628.655-1.628 1.944v6.119H4.832V8.284c0-1.289.328-2.313.987-3.07.68-.758 1.569-1.146 2.674-1.146 1.278 0 2.246.491 2.886 1.474L12 6.585l.622-1.043c.64-.983 1.608-1.474 2.886-1.474 1.104 0 1.994.388 2.674 1.146.658.757.986 1.781.986 3.07v6.304z" />
              </svg>
            </a>
          </li>
        </ul>
        <ul className="links__list">
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Links;
