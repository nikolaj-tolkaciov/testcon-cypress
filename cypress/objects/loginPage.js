class LoginPage {
    visit() {
        cy.visit('/')
    }
    getUserSelectDropdown() {
        return cy.get()
    }
}
export default LoginPage