/// <reference types="Cypress" />

describe('Smoke test site', () => {
    it('Should load the main page', () => {
        cy.visit('/');

        // Ensure the main navbar is present
        cy.get('[data-cy="nav-bar"]');

        // Ensure the logo is present
        cy.get('[data-cy="nav-bar"] [data-cy="logo"]');

        // Ensure that the page has a title
        cy.get('[data-cy="page-title"]');
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

    it('Should be responsive to window size changes', () => {
        cy.viewport(1023, 768);

        cy.get('[data-cy="burger-button"]').should('be.visible');

        // We only show icons when the screen is big enough
        cy.get('[data-cy="social-icon"]').should('not.be.visible');

        cy.viewport(1920, 1080);

        // The burger menu should not appear on larger dimensions.
        cy.get('[data-cy="burger-button"]').should('not.be.visible');
        cy.get('[data-cy="social-icon"]').should('be.visible');
    });
});
