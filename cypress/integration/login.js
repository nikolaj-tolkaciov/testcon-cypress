import LoginPage from '../obj/loginPage.js'

describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        const loginPage = new LoginPage()
        loginPage.visit()
        loginPage.getUserSelectDropdown()
        loginPage.getExtendedDropdown()
        
        
    })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 15"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 15')
        cy.get('.main-nav').find('li').should('have.length', 2)
        cy.get('.calendar--today').contains(`${new Date().getDate()}`)
    })
})