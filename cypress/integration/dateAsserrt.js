describe('Calendar functionality', function() {
    it('Should be "Today" picked in the calendar', function () {
        
        cy.visit('/')
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get('[aria-label="Demo User"]').click()
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="Team Lead"]').click()
        cy.get('[type="submit"]').click()
    
        cy.get('.calendar--today').contains(new Date().getDate())
    })
})
