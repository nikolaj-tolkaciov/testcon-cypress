class LoginPage {
  visit() {
    cy.visit("/");
  }

  getUserWarning() {
    return cy.get(".Select.not-valid");
  }

  submitForm() {
    cy.get('[type="submit"]').click();
  }

  login(name, role) {
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get(`[aria-label="${name}"]`).click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get(`[aria-label="${role}"]`).click();
    cy.get('[type="submit"]').click();
  }
}
export default LoginPage;
