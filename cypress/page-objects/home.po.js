class HomePage {
  getPageTitle() {
    return cy.get(".page__title");
  }

  getCalendar() {
    return cy.get(".calendar");
  }

  getProjectInfoForm() {
    return cy.get(".tile.form");
  }

  getUserNameTitle() {
    return cy.get(".user-info__title");
  }

  getAvailableTabs() {
    return cy.get(".main-nav").find("li");
  }

  getCurrentCalendarDate() {
    return cy.get(".calendar--today");
  }

  getActiveTab() {
    return cy.get(".main-nav__link--active");
  }
}
export default HomePage;
