class TimeLoggingPage {
    getPageTitle() {
        return cy.get('.page__title')
    }
    
    getCalendar() {
        return cy.get('.calendar')
    }

    getTileForm() {
        return cy.get('.tile.form')
    }

    getUserName() {
        return cy.get('.user-info__title')
    }

    getMainNavigation() {
        return cy.get('.main-nav')
    }

    getActiveMainNavigationLink() {
        return cy.get('.main-nav__link--active')
    }

    getSelectedCalendarDay() {
        return cy.get('.calendar--selected')
    }
}

export default TimeLoggingPage
