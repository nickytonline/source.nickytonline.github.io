import React from 'react';
import { Link } from 'gatsby';

const Navbar = class extends React.Component {
  componentDidMount() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'),
      0,
    );
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach((el) => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="logo" to="/" className="navbar-item" title="Logo">
              <span
                className="logo__emoji"
                role="img"
                aria-label="laptop emoji"
              >
                💻
              </span>{' '}
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
              <a
                className="navbar-item"
                href="https://twitter.com/nickytonline"
                aria-label="Twitter account for nickytonline"
              >
                <i className="icon icon--twitter" />
              </a>
              <a
                className="navbar-item"
                href="https://github.com/nickytonline"
                aria-label="Github account for nickytonline"
              >
                <i className="icon icon--github" />
              </a>
              <a
                className="navbar-item"
                href="https://www.linkedin.com/in/nickytonline"
                aria-label="LinkedIn account for nickytonline"
              >
                <span className="icon icon--linkedin" />
              </a>
              <a
                className="navbar-item"
                href="https://dev.to/nickytonline"
                aria-label="dev.to account for nickytonline"
              >
                <span className="icon icon--devto" />
              </a>
              <a
                className="navbar-item"
                href="https://stackoverflow.com/users/77814/nickytonline"
                aria-label="Stack Overflow account for nickytonline"
              >
                <span className="icon icon--stackoverflow" />
              </a>
              <a
                className="navbar-item"
                href="https://toot.cafe/@nickytonline"
                aria-label="Mastodon account for nickytonline"
              >
                <span className="icon icon--mastodon" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
