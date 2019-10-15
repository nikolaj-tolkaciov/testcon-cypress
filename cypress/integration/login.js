import LoginPage from '../objects/loginPage'

const loginPage = new LoginPage()


describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
    //    loginPage.visit()
    //    loginPage.getUserSelectDropdown().should('be.visible')
    //    cy.get('[type="submit"]').click()
    //    loginPage.getUserSelectDropdown().should('be.visible')


        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    // it('Should be able to login with role User', function () {
    //     cy.get('[id="loginForm.userId"]').click({force:true})
    //     cy.get('[aria-label="Demo User"]').click()
    //     cy.get('[id="loginForm.role"]').click({force:true})
    //     cy.get('[aria-label="Team Lead"]').click()
    //     cy.get('[type="submit"]').click()

    //     cy.url().should('include', '/time-logging')
    //     cy.get('.page__title').contains('Timesheets')
    //     cy.get('.calendar').should('be.visible')
    //     cy.get('.tile.form').should('be.visible')
    //     cy.get('.user-info__title').contains('Demo User')
    //     cy.get('.main-nav').find('li').should('have.length', 2)
    //     let date = new Date();
    //     let n = date.getUTCDate();
    //     cy.get('.calendar--today').contains(n);
    // })

    // it('Should be able to login with role User 19', function () {
    //     cy.get('[id="loginForm.userId"]').click({force:true})
    //     cy.get('[aria-label="TestCon User 19"]').click()
    //     cy.get('[id="loginForm.role"]').click({force:true})
    //     cy.get('[aria-label="Manager"]').click()
    //     cy.get('[type="submit"]').click()

    //     cy.url().should('include', '/time-logging')
    //     cy.get('.page__title').contains('Timesheets')
    //     cy.get('.calendar').should('be.visible')
    //     cy.get('.tile.form').should('be.visible')
    //     cy.get('.user-info__title').contains('TestCon User 19')

    //     cy.get('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
    //     cy.get('.main-nav__link').contains('Invoices')
    // })

    it('Should be able to login with role User 19-Admimn', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 19"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 19')
        //cy.get('.main-nav').find('li').contains('main-nav__link main-nav__link--active')

        cy.get('.main-nav__link--active').contains('Time Logging').should('have.css', 'color', 'rgb(64, 76, 237)')
        cy.get('.main-nav__link').contains('Invoices')

        cy.get('.main-nav__link').contains('Tasks').click({force:true})
        cy.get('[type="button"]').click()
        cy.get('[id="taskDetailsForm.name"]').type('Task Name')
        cy.get('[id="taskDetailsForm.description"]').type('Description')
        cy.get('[id="react-select-6--value"]').click({force:true})
        cy.get('[aria-label="Yes"]').click()
        cy.get('[id="taskDetailsForm.rate"]').type('9.99') 

        cy.get('[type="submit"]').click()
    })
})