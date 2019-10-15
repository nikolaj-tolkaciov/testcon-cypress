class HomePage {
    checkUrl(myUrl) {
        return cy.url().should('include', myUrl)
    }

    calendar(){
        return cy.get('.calendar')
    }

    logForm(){
        return cy.get('.tile.form')
    }

    getUser(){
        return cy.get('.user-info__title')
    }

    selectTabs() {
        return cy.get('.main-nav').find('li')
    }

    getActiveTab(){
        return cy.get('.main-nav__link--active')
    }

    getDropdown(){
        return cy.get('.btn__list-item')
    }
}

export default HomePage