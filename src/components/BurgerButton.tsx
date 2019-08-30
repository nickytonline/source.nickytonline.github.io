import * as React from 'react';

import styles from './BurgerButton.module.scss';

export interface BurgerButtonProps {
    toggleMenu: VoidFunction;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ toggleMenu }) => {
    const toggleBurgerButton = (event: React.MouseEvent) => {
        const button = event.target as HTMLElement;

        button.classList.toggle(styles.isActive);
        toggleMenu();
    };

    return (
        <button
            className={styles.burger}
            role="button"
            aria-label="Menu"
            data-cy="burger-button"
            onClick={toggleBurgerButton}
        />
    );
};

BurgerButton.displayName = 'BurgerButton';
