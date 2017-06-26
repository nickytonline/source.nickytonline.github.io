import React from 'react';
import { config } from 'config';
import './style.css';
import '../../static/fonts/fontawesome/style.css';

class SiteLinks extends React.Component {
  render() {
    return (
      <div className="blog-links">
        <ul>
          {config.siteTwitterUrl && (
            <li>
              <a href={config.siteTwitterUrl}>
                <i className="fa fa-twitter" />
              </a>
            </li>
          )}
          {config.siteGithubUrl && (
            <li>
              <a href={config.siteGithubUrl}>
                <i className="fa fa-github-alt" />
              </a>
            </li>
          )}
          {config.siteLinkedInUrl && (
            <li>
              <a href={config.siteLinkedInUrl}><i className="fa fa-linkedin" /></a>
            </li>
          )}
        </ul>
        <ul>
          {config.siteStackoverflowUrl && (
            <li>
              <a href={config.siteStackoverflowUrl}><i className="fa fa-stack-overflow" /></a>
            </li>
          )}
          {config.siteEmailUrl && (
            <li>
              <a href={`mailto:${config.siteEmailUrl}`}>
                <i className="fa fa-envelope-o" />
              </a>
            </li>
          )}
          {config.siteRssUrl && (
            <li>
              <a href={config.siteRssUrl}><i className="fa fa-rss" /></a>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SiteLinks;
