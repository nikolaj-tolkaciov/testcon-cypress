describe("Login functionality", function() {
  it("Should display validation for empty user after attempted loggin", function() {
    cy.visit("/");
    cy.get(".Select.not-valid").should("not.visible");
    cy.get('[type="submit"]').click();
    cy.get(".Select.not-valid").should("be.visible");
  });

  it("Should be able to login with role User", function() {
    cy.get('[id="loginForm.userId"]').click({ force: true });
    cy.get('[aria-label="Demo User"]').click();
    cy.get('[id="loginForm.role"]').click({ force: true });
    cy.get('[aria-label="Team Lead"]').click();
    cy.get('[type="submit"]').click();

    cy.url().should("include", "/time-logging");
    cy.get(".page__title").contains("Timesheets");
    cy.get(".calendar").should("be.visible");
    cy.get(".tile.form").should("be.visible");
    cy.get(".user-info__title").contains("Demo User");
    cy.get(".main-nav")
      .find("li")
      .should("have.length", 2);
    cy.get(".calendar--today").contains(`${new Date().getDate()}`);
  });

  const rolesData = [
    {
      name: "User",
      tabs: 1
    },
    {
      name: "Team Lead",
      tabs: 2
    },
    {
      name: "Manager",
      tabs: 5
    },
    {
      name: "Accountant",
      tabs: 5
    },
    {
      name: "Admin",
      tabs: 6
    }
  ];

  rolesData.forEach(roles => {
    it(`Should login as ${roles.name} and have ${roles.tabs} tabs`, function() {
      cy.clearLocalStorage("ACCESS_TOKEN");
      cy.reload();
      cy.get('[id="loginForm.userId"]').click({ force: true });
      cy.get('[aria-label="TestCon User 2"]').click();
      cy.get('[id="loginForm.role"]').click({ force: true });
      cy.get(`[aria-label="${roles.name}"]`).click();
      cy.get('[type="submit"]').click();

      cy.get(".user-info__title").contains("TestCon User 2");
      cy.get(".main-nav")
        .find("li")
        .should("have.length", roles.tabs);
      cy.get(".main-nav__link--active").contains("Time Logging");
      cy.get(".main-nav__link--active")
        .should("have.css", "color")
        .and("equal", "rgb(64, 76, 237)");
    });
  });
});
