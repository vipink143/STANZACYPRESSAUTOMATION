

class loginPageElements
{
    username(username)
    {
        cy.get(loginElementLocators.loginPageLocators.username_text).type(username) 
        return
    }

    password(password)
    {
        cy.get(loginElementLocators.loginPageLocators.password_text).type(password)
        return
    }

    loginButton()
    {
        cy.get(loginElementLocators.loginPageLocators.login_button).click()
        return
    }
} export default loginPageElements