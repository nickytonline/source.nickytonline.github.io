import React, { useRef, useEffect } from 'react';
import { Link } from 'gatsby';
import { SocialIcon, Container, BurgerButton } from 'components';
import { SiteMetaData, SocialLinkId } from 'types/site-meta-data';

import styles from './Navbar.module.scss';

export interface NavbarProps {
    siteMetadata: SiteMetaData;
}

function useFireScroll(ref: React.RefObject<HTMLSpanElement>) {
    // 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
    useEffect(() => {
        const logo = ref.current;

        if (!logo) {
            return;
        }

        const listener = () => {
            logo.innerText = '🔥';

            setTimeout(() => {
                logo.innerText = '👨‍💻';
            }, 750);
        };

        window.addEventListener('scroll', listener);

        return () => {
            window.removeEventListener('scroll', listener);
        };
    }, [ref]);
}

export const Navbar: React.FC<NavbarProps> = React.memo(({ siteMetadata }) => {
    const { socialLinks } = siteMetadata;
    const navMenu = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLSpanElement>(null);

    useFireScroll(logoRef);

    return (
        <nav
            className={`navbar is-transparent ${styles.navbar}`}
            role="navigation"
            aria-label="main-navigation"
            data-cy="nav-bar"
        >
            <Container className={styles.navbarContents}>
                <div className={`navbar-brand ${styles.navbarBrand}`}>
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
                            ref={logoRef}
                        >
                            👨‍💻
                        </span>
                        just some dev
                    </Link>
                    <BurgerButton
                        toggleMenu={() => {
                            navMenu.current &&
                                navMenu.current.classList.toggle('is-active');
                        }}
                    />
                </div>
                <div ref={navMenu} className="navbar-menu">
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
});

Navbar.displayName = 'Navbar';
