import * as React from 'react';
import { Link } from 'gatsby';
import styles from './BlogTag.module.scss';

export interface BlogTagProps {
    name: string;
    url: string;
    totalCount?: number;
}

export const BlogTag: React.FC<BlogTagProps> = ({ name, url, totalCount }) => (
    <Link
        to={url}
        className={styles.tag}
        data-count={typeof totalCount !== undefined ? totalCount : ''}
        data-cy="blog-tag"
    >
        {name}
    </Link>
);

BlogTag.displayName = 'BlogTag';
