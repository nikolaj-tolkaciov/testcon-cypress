import LoginPage from "../page-objects/login.po";
import HomePage from "../page-objects/home.po";

describe("Login functionality", function() {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  it("Should display validation for empty user after attempted loggin", function() {
    loginPage.visit();
    loginPage.getUserWarning().should("not.visible");
    loginPage.submitForm();
    loginPage.getUserWarning().should("be.visible");
  });

  it("Should be able to login with role User", function() {
    loginPage.login("Demo User", "Team Lead");
    cy.url().should("include", "/time-logging");
    homePage.getPageTitle().contains("Timesheets");
    homePage.getCalendar().should("be.visible");
    homePage.getProjectInfoForm().should("be.visible");
    homePage.getUserNameTitle().contains("Demo User");
    homePage.getAvailableTabs().should("have.length", 2);
    homePage.getCurrentCalendarDate().contains(`${new Date().getDate()}`);
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
      loginPage.login("TestCon User 2", roles.name);

      homePage.getUserNameTitle().contains("TestCon User 2");
      homePage.getAvailableTabs().should("have.length", roles.tabs);
      homePage.getActiveTab().contains("Time Logging");
      homePage
        .getActiveTab()
        .should("have.css", "color")
        .and("equal", "rgb(64, 76, 237)");
    });
  });
});
