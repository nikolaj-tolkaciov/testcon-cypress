class LoginPage {
    visitLogin() {
        cy.visit('/')
    }

    getInvalidSelectElement() {
        return cy.get('.Select.not-valid')
    }

    getSubmitButton() {
        return cy.get('[type="submit"]')
    }

    getLoginFormUserInput() {
        return cy.get('[id="loginForm.userId"]')
    }

    getUsernameElement(name) {
        return cy.get(`[aria-label="${name}"]`)
    }

    getLoginFormRoleInput() {
        return cy.get('[id="loginForm.role"]')
    }

    getRoleElement(role) {
        return cy.get(`[aria-label="${role}"]`)
    }
}

export default LoginPage
