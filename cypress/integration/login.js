import LoginPage from './LoginPage'

describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        const loginPage = new LoginPage()
        loginPage.visit()
        loginPage.getUserSelectorDropDown().should('not.visible')
        cy.get('[type="submit"]').click()
        loginPage.getUserSelectorDropDown().should('be.visible')
    })

    it('Should be able to login with all roles', function () {
        const roles = ["User", "Team Lead", "Manager", "Accountant", "Admin"]
        const tabs =  [ 1,      2,           5,         5,            6]
        const user = "TestCon User 10"
        const loginPage = new LoginPage()
        loginPage.visit()
        for (let i = 0; i < roles.length; i++) {
            loginPage.setUserLogin(user)
            loginPage.setRole(roles[i])
            loginPage.clickLogin()

            cy.url().should('include', '/time-logging')
            cy.get('.page__title').should('contain.text', 'Timesheets')
            cy.get('.calendar').should('be.visible')
            cy.get('.tile.form').should('be.visible')
            cy.get('.user-info__title').contains(`${user}`)
            cy.get('.main-nav').find('li').should('have.length', tabs[i])

            cy.get('.main-nav__link--active').should('contain.text', "Time Logging")
            cy.get('[aria-labelledby="timeLoggingId"]')     
            .should('have.css', 'color')
            .and('eq', 'rgb(64, 76, 237)')

            cy.get('.user-button').click()
            cy.get('.btn__list-item').contains('Log Out').click()
        }
    })
})