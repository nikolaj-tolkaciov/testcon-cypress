class LoginPage {
    visit(){
        cy.visit('/')
    }
    getUserSelectDropdown(){
        return cy.get('.Select.not-valid')
    }

}

export default LoginPage