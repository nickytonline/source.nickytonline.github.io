import * as React from 'react';
import { Twitter, Reddit, HackerNews } from 'react-social-sharing';

import styles from './SocialLinks.module.scss';
interface SocialLinksProps {
    message: string;
    url: string;
    tags: string[];
    className: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = React.memo(
    ({ message, url, tags = [], className = '' }) => {
        const messageWithTags = `${message} ${tags
            .map(tag => `#${tag}`)
            .join(' ')}`;

        return (
            <div
                className={`${styles.socialLinks} ${className}`}
                data-cy="share-buttons"
            >
                <Twitter
                    solid
                    small
                    message={messageWithTags}
                    link={url}
                    data-cy="twitter"
                />
                <Reddit
                    solid
                    small
                    message={message}
                    link={url}
                    data-cy="reddit"
                />
                <HackerNews
                    solid
                    small
                    message={message}
                    link={url}
                    data-cy="hacker-news"
                />
            </div>
        );
    },
);
