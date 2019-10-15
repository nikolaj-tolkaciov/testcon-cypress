const date = new Date();
const today = date.getDate();

describe('Login functionality', function() {

    beforeEach(()=>{
        cy.visit('/') 
    })


    it('Should display validation for empty user after attempted loggin', function () {
        cy.get('.Select.not-valid').should('not.visible')
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    })

    it('Should be able to login with role User', function () {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 23"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
        cy.get('[type="submit"]').click()
        cy.url().should('include', '/time-logging')
        cy.get('.page__title').contains('Timesheets')
        cy.get('.calendar').should('be.visible')
        cy.get('.tile.form').should('be.visible')
        cy.get('.user-info__title').contains('TestCon User 23')
        cy.get('.main-nav').find('li').should('have.length', 1)
        cy.get('.calendar--today').should('contain', today).and('have.css', 'background-color')
        cy.get('.user-info__title').click()
        cy.get('[class="main-header__menu"]').contains('Log Out').click()

        cy.get('.user-info__title').click()
        cy.get('[class="main-header__menu"]').contains('Log Out').click()
    })

    it.only('Should be able to login with all user roles', function () {

        const roles = ['User', 'Team Lead', 'Manager', 'Accountant', 'Admin']
    
        for (let i = 0; i < roles.length ; i++) {  
            cy.get('[id="loginForm.userId"]').click({force:true})
            cy.get('[aria-label="TestCon User 23"]').click()
            cy.get('[id="loginForm.role"]').click({force:true})
            cy.get(`[aria-label="${roles[i]}"]`).click()
            cy.get('[type="submit"]').click()
            cy.url().should('include', '/time-logging')

            cy.get('.user-info__title').click()
            cy.get('[class="main-header__menu"]').contains('Log Out').click()
            
            //cy.get('.page__title').contains('Timesheets')
            //cy.get('.calendar').should('be.visible')
            //cy.get('.tile.form').should('be.visible')
            //cy.get('.user-info__title').contains('TestCon User 23')
            //cy.get('.main-nav').find('li').should('have.length', 1)
            //cy.get('.calendar--today').should('contain', today).and('have.css', 'background-color')
        }
    })
})

