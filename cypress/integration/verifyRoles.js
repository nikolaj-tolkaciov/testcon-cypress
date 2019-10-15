describe('T2 Verify Roles', function() {
    it('Should display validation for empty user after attempted loggin', function () {
       
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    let rolesArray = ["User", "Team Lead", "Manager", "Accountant", "Admin"];

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 6"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 6')
        cy.get('.main-nav').find('li').should('have.length', 1)

        cy.get('.main-nav__link--active').contains('Time Logging');
        cy.get('.main-nav__link--active').should('have.css', 'color', 'rgb(64, 76, 237)');

        cy.get('.user-info__title').click();
        cy.get('.btn__list-item').contains('Log Out').click();
    })
})