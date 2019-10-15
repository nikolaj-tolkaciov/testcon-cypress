import LoginPage from '../object/LoginPage'
import TimeLoggingPage from '../object/TimeLoggingPage'
const testUser = 'TestCon User 1'

describe('Login functionality', function() {
    it('Should display validation for empty user after attempted loggin', function () {
        const loginPage = new LoginPage()
        loginPage.visitLogin()
        loginPage.getInvalidSelectElement().should('not.visible')
        loginPage.getSubmitButton().click()
        loginPage.getInvalidSelectElement().should('be.visible')
    })

    it('Should be able to login with role Team Lead and check if calendar selects current day', function () {
        const loginPage = new LoginPage()

        loginPage.getLoginFormUserInput().click({force:true})
        loginPage.getUsernameElement(testUser).click()
        loginPage.getLoginFormRoleInput().click({force:true})
        loginPage.getRoleElement('Team Lead').click()
        loginPage.getSubmitButton().click()

        cy.url().should('include', '/time-logging')

        const timeLoggingPage = new TimeLoggingPage()

        timeLoggingPage.getPageTitle().contains('Timesheets')
        timeLoggingPage.getCalendar().should('be.visible')
        timeLoggingPage.getTileForm().should('be.visible')
        timeLoggingPage.getUserName().contains(`${testUser}`)
        timeLoggingPage.getMainNavigation().find('li').should('have.length', 2)
        timeLoggingPage.getSelectedCalendarDay().contains(`${new Date().getDate()}`)
    })

    describe('Should be able to login with all user roles and get required amount navigation tabs', () => {
        const expectedDataCollection = [
            {
                name: 'User',
                navTabs: 1
            },
            {
                name: 'Team Lead',
                navTabs: 2
            },
            {
                name: 'Manager',
                navTabs: 5
            },
            {
                name: 'Accountant',
                navTabs: 5
            },
            {
                name: 'Admin',
                navTabs: 6
            }
        ]

        expectedDataCollection.forEach(expectedData => {
            it(`Should log in with ${expectedData.name} role and have ${expectedData.navTabs} tabs in navigation`, () => {
                const loginPage = new LoginPage()
                loginPage.visitLogin()

                loginPage.getLoginFormUserInput().click({force:true})
                loginPage.getUsernameElement(testUser).click()
                loginPage.getLoginFormRoleInput().click({force:true})
                loginPage.getRoleElement(expectedData.name).click()
                loginPage.getSubmitButton().click()

                cy.url().should('include', '/time-logging')
        
                const timeLoggingPage = new TimeLoggingPage()

                timeLoggingPage.getMainNavigation().find('li').should('have.length', expectedData.navTabs)
                timeLoggingPage.getActiveMainNavigationLink().contains('Time Logging')
            })
        })
    })
})
