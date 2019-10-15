describe('Login functionality', function() {
    it('Should display validation for empty user after attempted login', function () {

        cy.visit('/');
        cy.get('.Select.not-valid').should('not.visible');
        cy.get('[type="submit"]').click();
        cy.get('.Select.not-valid').should('be.visible')
    });

    it('Should be able to login with role User', function () {
        let date = new Date(), today = date.getUTCDate();

        cy.get('[id="loginForm.userId"]').click({force:true});
        cy.get('[aria-label="Demo User"]').click();
        cy.get('[id="loginForm.role"]').click({force:true});
        cy.get('[aria-label="User"]').click();
        cy.get('[type="submit"]').click();

        cy.url().should('include', '/time-logging');
        cy.get('.page__title').contains('Timesheets');
        cy.get('.calendar').should('be.visible');
        cy.get('.tile.form').should('be.visible');
        cy.get('.user-info__title').contains('Demo User');
        cy.get('.main-nav').find('li').should('have.length', 1);
        cy.get('.calendar--today').should('have.text', String(today));
    })
});
