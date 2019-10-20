describe('Login functionality', function() {
    it('TC0: Should display validation for empty user after attempted loggin', function () {
       
        cy.visit('/', {failOnStatusCode: false})
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('TC1: Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="Demo User"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User')
        cy.get('.main-nav').find('li').should('have.length', 2)

    })

    it('TC2: Should be able to login with all user roles', function () {
        const users = 
        [{
            role: 'User',
            tabs: 1
        },
        {
            role: 'Team Lead',
            tabs: 2
        },
        {
            role: 'Manager',
            tabs: 5
        },
        {
            role: 'Accountant',
            tabs: 5
        },
        {
            role: 'Admin',
            tabs: 6
        }]

        users.forEach(user => {
            cy.visit('/')
            cy.get('[id="loginForm.userId"]').click({force:true})
            cy.get('[aria-label="TestCon User 11"]').click()
            cy.get('[id="loginForm.role"]').click({force:true})
            cy.get(`[aria-label="${user.role}"]`).click()
            cy.get('[type="submit"]').click()
            cy.url().should('include', '/time-logging')
            cy.get('.user-info__title').contains('TestCon User 11')
            cy.get('.main-nav').find('li').should('have.length', `${user.tabs}`)
            cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')
            cy.get('.user-button').click()
            cy.get('button').contains('Log Out').click()
        })
    })

    it('TC3: Admin creates new task', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 11"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click()
        cy.visit('/tasks', {failOnStatusCode: false})
        cy.get('.btn').click()
        cy.get('[id="taskDetailsForm.name"]').type("Test Task")
        cy.get('[id="taskDetailsForm.description"]').type("Test Description")
        cy.get('.Select-control').click()
        //cy.get('[aria-activedescendant = "react-select-11--option-0"]').click()
        
    });
})