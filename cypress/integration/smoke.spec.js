/// <reference types="Cypress" />

describe('Smoke test site', () => {
    it('Should load the main page', () => {
        cy.viewport(1920, 1080);
        cy.visit('/');

        // Ensure the main navbar is present
        cy.get('[data-cy="nav-bar"]').should('be.visible');

        // Ensure the logo is present
        cy.get('[data-cy="nav-bar"] [data-cy="logo"]').should('be.visible');

        cy.get('[data-cy="nav-bar"] [data-cy="social-icon"]').should(
            'be.visible',
        );

        // Ensure that the page has a title
        cy.get('[data-cy="page-title"]')
            .should('be.visible')
            .then(header => {
                expect(header.text()).to.equal('Latest Posts');
            });
    });

    it('Should load a blog page', () => {
        cy.visit('/blog/2017-06-25-reboot-in-gatsby/');

        // Ensure the post has a title
        cy.get('[data-cy="page-title"]');

        // Ensure that there are share buttons
        cy.get('[data-cy="share-buttons"]');
        cy.get('[data-cy="share-buttons"] [data-cy="twitter"]').should(
            'be.visible',
        );
        cy.get('[data-cy="share-buttons"] [data-cy="reddit"]').should(
            'be.visible',
        );
        cy.get('[data-cy="share-buttons"] [data-cy="hacker-news"]').should(
            'be.visible',
        );

        // Ensure there are blog tags
        cy.get('[data-cy="blog-tag"]');
    });

    it('Should load embedded twitter content', () => {
        cy.visit('/blog/2019-05-20-the-chromium-browser-wars/');
        cy.get('twitter-widget');
    });

    it('Should load the Contact page', () => {
        cy.visit('/contact');
        cy.get('[data-cy="page-title"]').then(header => {
            expect(header.text()).to.equal('Contact');
        });
    });

    it('Should load the About page', () => {
        cy.visit('/about');
        cy.get('[data-cy="page-title"]').then(header => {
            expect(header.text()).to.equal('About Me');
        });
    });

    it('Should load the Thanks page', () => {
        cy.visit('/thanks');
        cy.get('[data-cy="page-title"]').then(header => {
            expect(header.text()).to.equal('Thanks');
        });
    });

    it.only('Should be responsive to window size changes', () => {
        cy.visit('/');

        // Smaller window dimensions should display the burger menu
        cy.viewport(1023, 768);
        cy.get('[data-cy="nav-bar"] [data-cy="logo"]').should('be.visible');
        cy.get('[data-cy="nav-bar"] [data-cy="burger-button"]')
            .as('burgerButton')
            .should('be.visible');

        // Menu should only be visible once click
        cy.get('@burgerButton').click();

        // The burger menu should not appear on larger dimensions
        // and we only show icons when the screen is big enough
        cy.get('[data-cy="nav-bar"] [data-cy="social-icon"]').as('socialIcon');
        // .then(([socialLink]) => {
        //     cy.window().then($window => {
        // Viewport is still 1023 x 768 at this point
        // expect($window.getComputedStyle(socialLink).mask).to.equal(
        //     'none',
        // );

        cy.viewport(1920, 1080);

        cy.get('[data-cy="nav-bar"] [data-cy="burger-button"]').should(
            'not.be.visible',
        );

        // cy.get('@socialIcon').then(() => {
        //     const style = $window.getComputedStyle(socialLink);
        //     expect(style.mask).not.to.equal('none');
        //     expect(style.mask.startsWith('url(')).to.be.true;
        // });
        //     });
        // });
    });
});
