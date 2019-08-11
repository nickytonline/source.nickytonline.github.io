import * as React from 'react';
import { Link } from 'gatsby';
import { SocialIcon, Container, BurgerButton } from 'components';
import { SiteMetaData, SocialLinkId } from 'types/site-meta-data';

import styles from './Navbar.module.scss';

export interface NavbarProps {
    siteMetadata: SiteMetaData;
}

export class Navbar extends React.PureComponent<NavbarProps, {}> {
    static displayName = 'Navbar';

    render() {
        const { socialLinks } = this.props.siteMetadata;

        return (
            <nav
                className={`navbar is-transparent ${styles.navbar}`}
                role="navigation"
                aria-label="main-navigation"
                data-cy="nav-bar"
            >
                <Container className={styles.navbarContents}>
                    <div className="navbar-brand">
                        <Link
                            className="logo navbar-item"
                            to="/"
                            title="Logo"
                            data-cy="logo"
                        >
                            <span
                                className="logo__emoji"
                                role="img"
                                aria-label="laptop emoji"
                            >
                                💻
                            </span>
                            just some dev
                        </Link>
                        <BurgerButton target="navMenu" />
                    </div>
                    <div id="navMenu" className="navbar-menu">
                        <div className="navbar-start has-text-centered">
                            <Link
                                className="navbar-item"
                                to="/"
                                aria-label="Blog posts"
                            >
                                Blog
                            </Link>
                            <Link
                                className="navbar-item"
                                to="/about"
                                aria-label="About"
                            >
                                About
                            </Link>
                            <Link
                                className="navbar-item"
                                to="/contact"
                                aria-label="Contact"
                            >
                                Contact
                            </Link>
                            <Link
                                className="navbar-item"
                                to="/thanks"
                                aria-label="Thanks"
                            >
                                Thanks
                            </Link>
                            {Object.entries(socialLinks).map(
                                ([id, { url, name }]) => (
                                    <SocialIcon
                                        key={id}
                                        id={id as SocialLinkId}
                                        url={url}
                                        name={name}
                                    />
                                ),
                            )}
                        </div>
                    </div>
                </Container>
            </nav>
        );
    }
}
