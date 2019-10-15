describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
       
        cy.visit('/')
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    const testUser = 'TestCon User 24'

    const expectedDataCollection = [
        {
            name: 'User',
            navTabs: 1
        },
        {
            name: 'Team Lead',
            navTabs: 2
        },
        {
            name: 'Manager',
            navTabs: 5
        },
        {
            name: 'Accountant',
            navTabs: 5
        },
        {
            name: 'Admin',
            navTabs: 6
        }
    ]

    expectedDataCollection.forEach(expectedData => {
        it(`Should log in with ${expectedData.name} role and have ${expectedData.navTabs} tabs in navigation`, () => {
            cy.visit('/')
            cy.get('[id="loginForm.role"]')
            cy.get('[id="loginForm.userId"]').click({ force: true })
            cy.get(`[aria-label="${testUser}"]`).click()
            cy.get('[id="loginForm.role"]').click({ force: true })
            cy.get(`[aria-label="${expectedData.name}"]`).click()
            cy.get('[type="submit"]').click()
            cy.url().should('include', '/time-logging')
            cy.get('.main-nav').find('li').should('have.length', expectedData.navTabs)
            cy.get('.main-nav__link--active').contains('Time Logging')
        })
    })
})

/*
    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 24"]').click()
        cy.get('[id="loginForm.role"]').each(function () {
          //cy.get('[id="loginForm.role"]').click({ force: true })
        
            cy.get('[aria-label="Team Lead"]').click()
            cy.get('[type="submit"]').click()


        })

        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User')
        cy.get('.main-nav').find('li').should('have.length', 2)
        let d = new Date(), a = d.getUTCDate();
        cy.get('.calendar--today').contains(a);
    })
})*/