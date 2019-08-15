import * as React from 'react';
import styles from './SocialIcon.module.scss';
import { SocialLinkId } from 'types/site-meta-data';

export interface SocialIconProps {
    id: SocialLinkId;
    name: string;
    url: string;
}

export const SocialIcon: React.FC<SocialIconProps> = React.memo(
    ({ id, name, url }) => (
        <a className="navbar-item" href={url} aria-label={`${name} account`}>
            <span
                className={`${styles.icon} ${styles[id]}`}
                data-name={name}
                data-cy="social-icon"
            />
        </a>
    ),
);

SocialIcon.displayName = 'SocialIcon';
