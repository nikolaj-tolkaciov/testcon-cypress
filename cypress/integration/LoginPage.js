class LoginPage {
    visit () {
        cy.visit('/')
    }

    getUserSelectorDropDown () {
        return cy.get('.Select.not-valid')
    }
}

export default LoginPage