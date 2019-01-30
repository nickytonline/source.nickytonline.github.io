import * as React from 'react';
import { ChildrenProp } from 'types/children-prop';

import styles from './Container.module.scss';

type ContainerProps = ChildrenProp & {
    className?: string;
};

export const Container: React.FC<ContainerProps> = ({
    children,
    className = '',
}) => <div className={`${styles.container} ${className}`}>{children}</div>;

Container.displayName = 'Container';
