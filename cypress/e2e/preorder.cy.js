describe('Preorder Approval', () => {
  it('passes when we press approve for preorder', () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.wait(1500)
    cy.contains("2023-03-29").click()
    cy.wait(1500)
    cy.get('button.btn-success').click();
    cy.wait(1500)
    cy.contains('button', 'Approve Request').click();
    cy.contains("Approved").click()
    cy.contains("2023-03-29")
  })
})