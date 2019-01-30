import * as React from 'react';

import styles from './BurgerButton.module.scss';

export interface BurgerButtonProps {
    target: string;
}

export class BurgerButton extends React.Component<BurgerButtonProps, {}> {
    static displayName = 'BurgerButton';
    burgerMenu: HTMLElement | null = null;

    onClickMenu = (event: MouseEvent) => {
        const burger = event.target as HTMLElement;

        if (!burger) {
            return;
        }

        const { target } = burger.dataset;

        if (!target) {
            return;
        }

        const menu = document.getElementById(target);

        burger.classList.toggle('is-active');
        menu && menu.classList.toggle('is-active');
    };

    componentDidMount() {
        this.burgerMenu = document.querySelector('[data-target="navMenu"]');

        if (this.burgerMenu) {
            this.burgerMenu.addEventListener('click', this.onClickMenu);
        }
    }

    componentWillUnmount() {
        if (this.burgerMenu) {
            this.burgerMenu.removeEventListener('click', this.onClickMenu);
        }
    }

    render() {
        return (
            <button
                className={styles.burger}
                data-target={this.props.target}
                role="button"
                aria-label="Menu"
            >
                <span />
                <span />
                <span />
            </button>
        );
    }
}
