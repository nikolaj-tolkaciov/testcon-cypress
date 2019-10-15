describe('User roles', function() {
    it('Should user roles work as intended', function () {
        
        cy.visit('/')
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="TestCon User 23"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Admin"]').click()
        cy.get('[type="submit"]').click()
    
        cy.get('[title="TestCon User 23"]').should('have.text', 'TestCon User 23')
        cy.get('.main-nav').find('li').should('have.length', 6)
        cy.get('[aria-labelledby="timeLoggingId"]').click()
        cy.get('[aria-labelledby="timeLoggingId"]')
        .should('have.css', 'color')
        .and('eq', 'rgb(64, 76, 237)')
    })
})
