import React, { useEffect } from 'react';

import styles from './BurgerButton.module.scss';

export interface BurgerButtonProps {
    target: string;
}

export const BurgerButton: React.FC<BurgerButtonProps> = ({ target }) => {
    const onClickMenu = (event: MouseEvent) => {
        const burger = event.target as HTMLElement;

        if (!burger) {
            return;
        }

        const { target } = burger.dataset;

        if (!target) {
            return;
        }

        const menu = document.getElementById(target);

        burger.classList.toggle(styles.isActive);
        menu && menu.classList.toggle('is-active');
    };

    useEffect(() => {
        const burgerMenu: HTMLElement | null = document.querySelector(
            '[data-target="navMenu"]',
        );

        if (burgerMenu) {
            burgerMenu.addEventListener('click', onClickMenu);
        }

        return () => {
            if (burgerMenu) {
                burgerMenu.removeEventListener('click', onClickMenu);
            }
        };
    });

    return (
        <button
            className={styles.burger}
            data-target={target}
            role="button"
            aria-label="Menu"
            data-cy="burger-button"
        />
    );
};

BurgerButton.displayName = 'BurgerButton';
