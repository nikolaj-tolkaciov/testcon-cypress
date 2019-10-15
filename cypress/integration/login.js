import LoginPage from '../pageObjects/loginPage'

describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        const loginPage = new LoginPage()
        loginPage.visit()
        loginPage.getUserSelectDropDown().should('not.visible')
        loginPage.getSubmitButton().click()
        loginPage.getUserSelectDropDown().should('be.visible')
    })

    it('Should be able to login with role User', function () {
        const loginPage = new LoginPage()
        loginPage.getUserId().click({force:true})
        loginPage.getDemoUserLabel().click()
        loginPage.selectUserRole()
        loginPage.getSubmitButton().click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User')
        cy.get('.main-nav').find('li').should('have.length', 1)
    })
})