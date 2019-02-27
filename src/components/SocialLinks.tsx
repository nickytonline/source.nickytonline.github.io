import * as React from 'react';
import { Twitter, Reddit, HackerNews } from 'react-social-sharing';

interface SocialLinksProps {
    message: string;
    url: string;
    tags: string[];
    className: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({
    message,
    url,
    tags = [],
    className = '',
}) => {
    const messageWithTags = `${message} ${tags
        .map(tag => `#${tag}`)
        .join(' ')}`;

    return (
        <div className={className}>
            <Twitter solid small message={messageWithTags} link={url} />
            <Reddit solid small message={message} link={url} />
            <HackerNews solid small message={message} link={url} />
        </div>
    );
};
