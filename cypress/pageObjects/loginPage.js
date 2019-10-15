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

    getUserId(){
        return cy.get('[id="loginForm.userId"]')
    }

    getDemoUserLabel(){
        return cy.get('[aria-label="Demo User"]')
    }

    selectUserRole(){
        cy.get('[id="loginForm.role"]').click({force:true})
        cy.get('[aria-label="User"]').click()
    }
}
export default LoginPage