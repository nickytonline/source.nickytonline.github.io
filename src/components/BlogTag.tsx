import * as React from 'react';
import { Link } from 'gatsby';
import styles from './BlogTag.module.scss';

export type BlogTagProps = {
  name: string;
  url: string;
  totalCount?: number;
};

export const BlogTag: React.FC<BlogTagProps> = ({ name, url, totalCount }) => (
  <Link to={url} className={styles.tag}>
    {name}
    {typeof totalCount !== undefined ? (
      <span className={styles.count}>{totalCount}</span>
    ) : null}
  </Link>
);
