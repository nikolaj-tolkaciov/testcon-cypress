class TimeLoggingPage{
    getPageTitle(){
        return cy.get('.page__title')
    }

    getCalendar(){
        return cy.get('.calendar').should('be.visible')
    }
    
    getFormTitle(){
        return cy.get('.tile.form')
    }
        
    getUserInfoTitle(){
        return cy.get('.user-info__title')
    }
    
}
export default TimeLoggingPage