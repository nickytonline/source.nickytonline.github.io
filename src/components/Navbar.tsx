import * as React from 'react';
import { Link } from 'gatsby';
import { SocialIcon } from 'components';
import { SiteMetaData, SocialLinkId } from 'types/site-meta-data';

export type NavbarProps = {
  siteMetadata: SiteMetaData;
};

export class Navbar extends React.Component<NavbarProps, {}> {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0,
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target!.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    const { socialLinks } = this.props.siteMetadata;

    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="logo navbar-item" to="/" title="Logo">
              <span
                className="logo__emoji"
                role="img"
                aria-label="laptop emoji"
              >
                💻
              </span>
              just some dev
            </Link>
            {/* Hamburger menu */}
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/" aria-label="Blog posts">
                Blog
              </Link>
              <Link className="navbar-item" to="/about" aria-label="About">
                About
              </Link>
              <Link className="navbar-item" to="/contact" aria-label="Contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/thanks" aria-label="Thanks">
                Thanks
              </Link>
              {Object.entries(socialLinks).map(([id, { url, name }]) => (
                <SocialIcon
                  key={id}
                  id={id as SocialLinkId}
                  url={url}
                  name={name}
                />
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
