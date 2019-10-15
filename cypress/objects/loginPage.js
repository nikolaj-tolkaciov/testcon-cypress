class LoginPage {
    visit () {
        cy.visit('/')
    }

    getUserSelectDropdown() {        
        return cy.get('.Select.not-valid')
    }

    submit() {
        return cy.get('[type="submit"]')
    }

    openUserDropdown() {
        return cy.get('[id="loginForm.userId"]')
    }

    selectUser() {
        return cy.get('[aria-label="TestCon User 6"]')
    }

    openRoleDropdown() {
        return cy.get('[id="loginForm.role"]')
    }

    selectRole(role){
        return cy.get(`[aria-label="${role}"]`)
    }

    getCalendarForToday(){
        return cy.get('.calendar--today')
    }
}

export default LoginPage