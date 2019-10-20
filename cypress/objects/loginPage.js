class loginPage{
    visit() {
        cy.visit('/')
    }

    getUserSelectDropdown() {
        return cy.get('.Select.not-valid')
    }
}