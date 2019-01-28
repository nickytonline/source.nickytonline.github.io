import * as React from 'react';
import { Link } from 'gatsby';
import { SocialIcon, Container } from 'components';
import { SiteMetaData, SocialLinkId } from 'types/site-meta-data';

import styles from './Navbar.module.scss';

export interface NavbarProps {
    siteMetadata: SiteMetaData;
}

export class Navbar extends React.Component<NavbarProps, {}> {
    burgerMenu: HTMLElement | null = null;

    onClickMenu = (event: MouseEvent) => {
        const burger = event.target as HTMLElement;

        if (!burger) {
            return;
        }

        const { target } = burger.dataset;

        if (!target) {
            return;
        }

        const menu = document.getElementById(target);

        burger.classList.toggle('is-active');
        menu && menu.classList.toggle('is-active');
    };

    componentDidMount() {
        this.burgerMenu = document.querySelector('.navbar-burger');

        if (this.burgerMenu) {
            this.burgerMenu.addEventListener('click', this.onClickMenu);
        }
    }

    componentWillUnmount() {
        if (this.burgerMenu) {
            this.burgerMenu.removeEventListener('click', this.onClickMenu);
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
                <Container className={styles.navbarContents}>
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
                </Container>
            </nav>
        );
    }
}
