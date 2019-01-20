import * as React from 'react';
import styles from './SocialIcon.module.scss';
import { SocialLinkId } from 'types/site-meta-data';

export type SocialIconProps = {
  id: SocialLinkId;
  name: string;
  url: string;
};

export const SocialIcon: React.FC<SocialIconProps> = ({ id, name, url }) => (
  <a
    className="navbar-item"
    href={url}
    aria-label="Github account for nickytonline"
    target="_blank"
    rel="noreferrer noopener"
  >
    <span className={`${styles.icon} ${styles[id]}`} data-name={name} />
  </a>
);

SocialIcon.displayName = 'SocialIcon';
