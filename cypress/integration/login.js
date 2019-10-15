describe('Login functionality', function() {

    beforeEach(function () {
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    afterEach(function () {
        cy.get(".user-info__title").click()
        cy.get(".btn__list-item").contains("Log Out").click()
    })

    // it('Should display validation for empty user after attempted loggin', function () {
       
    //     cy.visit('/')
    //     cy.get('.Select.not-valid').should('not.visible')
    //     cy.get('[type="submit"]').click()
    //     cy.get('.Select.not-valid').should('be.visible')
    // })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 4"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 4')
        cy.get('.main-nav').find('li').should('have.length', 1)
    })

    it('Should be able to login with role Team Lead', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 4"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 4')
        cy.get('.main-nav').find('li').should('have.length', 2)
    })

    it('Should be able to login with role Manager', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 4"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Manager"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 4')
        cy.get('.main-nav').find('li').should('have.length', 5)
    })

    it('Should be able to login with role Accountant', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 4"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Accountant"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 4')
        cy.get('.main-nav').find('li').should('have.length', 5)
    })

    it('Should be able to login with role Admin', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 4"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 4')
        cy.get('.main-nav').find('li').should('have.length', 6)
    })
})