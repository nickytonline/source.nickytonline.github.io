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

    it('Should be responsive to window size changes', () => {
        cy.visit('/');

        // Smaller window dimensions should display the burger menu
        cy.viewport('iphone-6');

        cy.get('[data-cy="nav-bar"] [data-cy="logo"]').should('be.visible');
        cy.get('[data-cy="nav-bar"] [data-cy="burger-button"]')
            .as('burgerButton')
            .should('be.visible');

        cy.get('@burgerButton').click();

        // Burger menu should only be visible once clicked
        cy.get('[data-cy="nav-bar"] [data-cy="social-icon"]')
            .as('socialIcon')
            .then(([socialLink]) => {
                cy.window().then($window => {
                    // mask and webkitMaskImage works in the test runner, but in headless, only webkitMaskImage works
                    expect(
                        $window.getComputedStyle(socialLink).webkitMaskImage,
                    ).to.equal('none');

                    // Test out a larger resolution
                    cy.viewport('macbook-15');

                    // Burger menu should not be visible on a large screen.
                    cy.get(
                        '[data-cy="nav-bar"] [data-cy="burger-button"]',
                    ).should('not.be.visible');

                    cy.get('@socialIcon').then(() => {
                        // mask and webkitMaskImage works in the test runner, but in headless, only webkitMaskImage works
                        const { webkitMaskImage } = $window.getComputedStyle(
                            socialLink,
                        );
                        expect(webkitMaskImage).not.to.equal('none');
                        expect(webkitMaskImage.startsWith('url(')).to.be.true;
                    });
                });
            });
    });

    it('should load the tags page for a specific tag', () => {
        cy.visit('/tags/yolo');

        cy.get('[data-cy="tag-header"]')
            .should('be.visible')
            .then(([tagHeader]) => {
                expect(
                    /\d+\s+post tagged with “yolo”/.test(tagHeader.innerText),
                ).to.be.true;
            });

        cy.get('[data-cy="post-list"]').should('be.visible');
        cy.get('[data-cy="browse-all-tags"]').should('be.visible');
    });

    it('should load the tags page for all tags', () => {
        cy.visit('/tags');

        cy.get('[data-cy="page-title"]')
            .should('be.visible')
            .then(pageTitle => {
                expect(pageTitle.text()).to.equal('Tags');
            });

        cy.get('[data-cy="blog-tag"]')
            .should('be.visible')
            .then(blogTags => {
                expect(blogTags.length).to.be.greaterThan(1);
                expect(Number(blogTags.attr('data-count'))).to.be.greaterThan(
                    0,
                );
            });
    });

    it.only('should load the sitemap.xml', async () => {
        // Doing basic text comparisons to ensure the site map is considered valid.
        // This could be improved by actually checking nodes in XML, but for now, this is good enough
        cy.request('/sitemap.xml')
            .its('body')
            .should('include', '<?xml version="1.0" encoding="UTF-8"?>')
            .should('include', '<urlset')
            .should('include', 'https://www.iamdeveloper.com/')
            .should(
                'include',
                '<loc>https://www.iamdeveloper.com/blog/2017-06-25-reboot-in-gatsby/</loc>',
            )
            .should(
                'include',
                '<loc>https://www.iamdeveloper.com/tags/gatsby/</loc>',
            )
            .should('include', '<loc>https://www.iamdeveloper.com/tags/</loc>')
            .should('include', '</urlset>');
    });
});
