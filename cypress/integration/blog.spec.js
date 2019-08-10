/// <reference types="Cypress" />

describe('Smoke test blog', () => {
    it('Should load the main page', () => {
        cy.visit('/');
        cy.get('[data-cy="nav-bar"]');
        cy.get('[data-cy="page-title"]');
    });

    it('Should load a blog page', () => {
        cy.visit('/blog/2017-06-25-reboot-in-gatsby/');
        cy.get('[data-cy="page-title"]');
        cy.get('[data-cy="blog-tag"]');
    });

    it('Should load embedded twitter content', () => {
        cy.visit('/blog/2019-05-20-the-chromium-browser-wars/');
        cy.get('.twitter-tweet');
    });
});
