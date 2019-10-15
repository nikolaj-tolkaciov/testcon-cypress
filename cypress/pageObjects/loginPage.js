class LoginPage{
     visit (){
         cy.visit('/')
     }

     getUserSelectDropDown(){
         return cy.get('.Select.not-valid')
     }

     getSubmitButton(){
        return cy.get('[type="submit"]')
    }
}
export default LoginPage