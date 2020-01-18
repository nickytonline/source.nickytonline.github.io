import * as React from 'react';

interface DevToCommentLinkProps {
    url: string | undefined;
    className: string;
}

export const DevToCommentLink: React.FC<DevToCommentLinkProps> = ({
    url,
    className,
}) =>
    url ? (
        <p className={className}>
            Join in on the{' '}
            <a href={url.replace(/\/$/, '') + '/#comments'}>
                conversation on DEV
            </a>
        </p>
    ) : null;

DevToCommentLink.displayName = 'DevToCommentLink';
