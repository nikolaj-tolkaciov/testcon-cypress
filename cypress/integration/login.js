import LoginPage from '../objects/loginPage'
import HomePage from '../objects/homePage'


const loginPage = new LoginPage()
const homePage = new HomePage()

describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
       
        loginPage.visit();
        loginPage.getUserSelectDropdown().should('not.visible')
        loginPage.submit().click()
        loginPage.getUserSelectDropdown().should('be.visible')
    })

    it('Should be able to login with role User', function () {

        //If we are using functions to login, then page HAS to be visited afterwards
        cy.loginAs("User")
        loginPage.visit();
        /**
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 6"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()
        **/

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User')
        cy.get('.main-nav').find('li').should('have.length', 1)
    })

    it('Should have valid today date', function () {

        var myDate = new Date();
        loginPage.getCalendarForToday().contains(myDate.getDate())
    })
})