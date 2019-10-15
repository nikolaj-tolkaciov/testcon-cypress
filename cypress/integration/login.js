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
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('Demo User')
        cy.get('.main-nav').find('li').should('have.length', 2)
        var date = new Date();
        var day = date.getDate();
        cy.get('.calendar--today').contains(day)
    })

    it('Should be able to login with all user roles', function () {
        var users = 
        [{
            userRole: 'User',
            numTabs: 1
        },
        {
            userRole: 'Team Lead',
            numTabs: 2
        },
        {
            userRole: 'Manager',
            numTabs: 5
        },
        {
            userRole: 'Accountant',
            numTabs: 5
        },
        {
            userRole: 'Admin',
            numTabs: 6
        }]

        users.forEach(user => {
            cy.visit('/')
            cy.get('[id="loginForm.userId"]').click({force:true})
            cy.get('[aria-label="TestCon User 3"]').click()
            cy.get('[id="loginForm.role"]').click({force:true})
            cy.get(`[aria-label="${user.userRole}"]`).click()
            cy.get('[type="submit"]').click()
            cy.url().should('include', '/time-logging')

            cy.get('.user-info__title').contains('TestCon User 3')
            cy.get('.main-nav').find('li').should('have.length', `${user.numTabs}`)

            cy.get('[aria-labelledby="timeLoggingId"]').should('have.css', 'color', 'rgb(64, 76, 237)')

            cy.get('.user-button').click()
            cy.get('button').contains('Log Out').click()
        });
    })

})