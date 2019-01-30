import * as React from 'react';
import { ChildrenProp } from 'types/children-prop';

import styles from './Section.module.scss';

type SectionProps = ChildrenProp & {
    className?: string;
};

export const Section: React.FC<SectionProps> = ({
    children,
    className = '',
}) => (
    <section className={`${styles.section} ${className}`}>{children}</section>
);

Section.displayName = 'Section';
