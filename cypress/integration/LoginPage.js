class LoginPage {
    visit () {
        cy.visit('/')
    }

    getUserSelectorDropDown () {
        return cy.get('.Select.not-valid')
    }

    setUserLogin (user) {
        cy.get('[id="loginForm.userId"]').click({force:true})
        cy.get(`[aria-label="${user}"]`).click()
    }

    setRole (role) {
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get(`[aria-label="${role}"]`).click()
    }

    clickLogin() {
        cy.get('[type="submit"]').click()
    }
}

export default LoginPage