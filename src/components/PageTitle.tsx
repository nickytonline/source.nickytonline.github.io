import * as React from 'react';
import { ChildrenProp } from 'types/children-prop';
import styles from './PageTitle.module.scss';

export type PageTitleProps = ChildrenProp & {
    className?: string;
};

export const PageTitle: React.FC<PageTitleProps> = React.memo(
    ({ children, className = '' }) => (
        <h1 className={`${styles.title} ${className}`} data-cy="page-title">
            {children}
        </h1>
    ),
);

PageTitle.displayName = 'PageTitle';
