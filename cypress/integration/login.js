describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
       
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="Demo User"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User')
        cy.get('.main-nav').find('li').should('have.length', 1)
        let d = new Date(), a = d.getUTCDate();
        cy.get('.calendar--today').contains(a);
    })

    it('Should have valid today date', function () {

        var myDate = new Date;
        cy.get('.calendar--today').contains(myDate.getDate())
    })
})