import LoginPage from '../objects/loginPage'
import HomePage from '../objects/homePage'

const loginPage = new LoginPage()
const homePage = new HomePage()

describe('T2 Verify Roles', function() {
    it('Should display validation for empty user after attempted loggin', function () {

        loginPage.visit();
        loginPage.getUserSelectDropdown().should('not.visible')
        loginPage.submit().click()
        loginPage.getUserSelectDropdown().should('be.visible')
    })

    let rolesArray = [{"role":"User", "tabs": 1},{"role":"Team Lead", "tabs": 2},{"role":"Manager", "tabs": 5},{"role":"Accountant", "tabs": 5},{"role":"Admin", "tabs": 6}];

    rolesArray.forEach(item => {
        it('Should be able to login with role ' + item.role, function () {
            console.log(item.role);
            console.log(item.tabs);
            
            loginPage.openUserDropdown().click({force:true})
            loginPage.selectUser().click()
            loginPage.openRoleDropdown().click({force:true})
            loginPage.selectRole(item.role).click()
            loginPage.submit().click()
    
            homePage.checkUrl('/time-logging')
           // cy.get('.page__title').contains('Timesheets')
            homePage.calendar().should('be.visible')
            homePage.logForm().should('be.visible')
            homePage.getUser().contains('TestCon User 6')
            homePage.selectTabs().should('have.length', item.tabs)
    
            homePage.getActiveTab().contains('Time Logging');
            homePage.getActiveTab().should('have.css', 'color', 'rgb(64, 76, 237)');
    
            homePage.getUser().click();
            homePage.getDropdown().contains('Log Out').click();

        })
        })
})