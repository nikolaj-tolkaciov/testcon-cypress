class LoginPage {
    visit () {
        cy.visit('/')
    }
    
    getUserSelectDropdown () {
        return cy.get('.Select.not-valid').should('not.visible')
    }

    getExtendedDropdown() {
        cy.get('[type="submit"]').click()
        cy.get('.Select.not-valid').should('be.visible')
    }
}
export default LoginPage