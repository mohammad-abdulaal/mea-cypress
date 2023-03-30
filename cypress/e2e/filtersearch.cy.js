// describe('Search filter in awaiting approvals', () => {

//   it(`finding the flight by filter search`, () => {
//     cy.visit(' https://itxi-recruiter-extract.web.app/login')
//     cy.get('input[type="email"]').type("qaquiz@gmail.com")
//     cy.get('input[type="password"]').type("Test@123")
//     cy.contains('Login').click()
//     cy.wait(2000)
//     cy.contains("Awaiting Approvals").click()
//     cy.wait(3000)
//     cy.get('input[type="text"]').type("Rabih")
//   })
//  })

 describe('Search filter in approvals', () => {

  it(`finding the flight by filter search`, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Approved").click()
    cy.wait(3000)
    cy.get('input[type="text"]').type("mohsen")
  })
 })