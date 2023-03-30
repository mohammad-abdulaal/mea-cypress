describe('test Contents and Login', () => {
  it('Contain title of page "MEA Crewtablet Portal v1.29.0 (1880)" with logo Mea', () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.contains("My Account")
    cy.get('span.switch-state').click()
  })
})
describe('test with unregiestered email',()=>{
  it('provide with email not registered',()=>{
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("saf@gmail.com")
    cy.get('input[type="password"]').type("123")
    cy.contains('Login').click()
    cy.contains("The username and password you entered did not match our records. Please double-check and try again.")
    
  })
})
describe('Logout', () => {
  it('Logout and get back to login screen', () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    // cy.contains("My Account").click()
    cy.get('img[alt="header-user"]').trigger('mousemove')
    cy.contains("Logout").trigger('mousemove').click()
    cy.contains("Your Username")
  })
})
