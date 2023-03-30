describe('test Cases', () => {
  it('Checking Provided Documentation test Cases for Mea Website ', () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.wait(2000)
    cy.contains('2023-03-29') 
    .invoke('text') 
    .then(dateString1 => {
    const date1 = new Date(dateString1); 
    const timestamp1 = date1.getTime(); 

    cy.contains('2022-04-15') 
      .invoke('text') 
      .then(dateString2 => {
        const date2 = new Date(dateString2); 
        const timestamp2 = date2.getTime(); 
        expect(timestamp1).to.be.greaterThan(timestamp2);
      });
    
    cy.wait(10000)
    // cy.contains("Flight Date").click().click()
    cy.contains("2022-04-15").click()
    cy.wait(10000)
    cy.get('textarea[id="additionalNotes"]').type("Extra Plate Chicken Biryani")
    cy.contains("Save").click({force: true})
    cy.wait(5000)
    cy.contains("2022-04-15").click()
    cy.get('input[id="passengerName"]').clear().type('Rabih');
    cy.get('button[type="button"]').click({force: true});
    cy.wait(2500)
    cy.contains("Discard changes?")
    cy.contains("Request History")
    cy.wait(2500)
    cy.contains("DIALOG_MESSAGES.DISCARD").click()
    cy.wait(1500)
    cy.contains("2022-04-15").click()
    cy.wait(1500)
    cy.get('button.btn-success').click();
    cy.wait(1500)
    // cy.contains("Cancel").click()
    cy.contains('button', 'Approve Request').click();
    cy.contains("Approved").click()
    cy.contains("2022-04-15")
    cy.contains("Awaiting Approvals").click()
    cy.contains("2023-03-29").click()
    cy.get('button.btn-danger').click();
    cy.wait(1500)
    cy.get('textarea[id="reason"]').type("health")
    cy.contains('Cancel Request').click()
    cy.wait(4000)
    cy.contains("2023-03-29").click()
    cy.wait(1500)
    cy.contains("Decline").click()
    cy.get('textarea[id="reason"]').type("due to work time")
    cy.wait(2000)
    cy.get('button.btn-danger:contains("Decline Request")').click();

    
  });
})})
//// Test Cases Seperately
describe('test Case 1', () => {

  it(`Verify the screen Title`, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
  })
 })

 describe('test Case 2', () => {

  it(`Verify the sorting of the table in desc order`, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.wait(2000)
    cy.contains('2023-03-29') 
    .invoke('text') 
    .then(dateString1 => {
    const date1 = new Date(dateString1); 
    const timestamp1 = date1.getTime(); 

    cy.contains('2022-04-15') 
      .invoke('text') 
      .then(dateString2 => {
        const date2 = new Date(dateString2); 
        const timestamp2 = date2.getTime(); 
        expect(timestamp1).to.be.greaterThan(timestamp2);
      });
  })
 })})
  describe('test Case 3', () => {

  it(`Verify Sorting by clicking flight date several times the order changes`, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.contains("Flight Date").click().click()

  })
 })
  describe('test Case 4', () => {

  it(`The "Save" button is enabled and the user can save the changes when editing the selected row`, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
     cy.contains("2022-04-15").click()
    cy.wait(10000)
    cy.get('textarea[id="additionalNotes"]').type("Extra Plate Chicken Biryani")
    cy.contains("Save").click({force: true})
  })
 })

  describe('test Case 5', () => {

  it(`Verify editing of a row where the column "Request Type" is of value "Special Uplift" it returns to previous page and when pressing discard return to previous page`, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.contains("2022-04-15").click()
    cy.get('input[id="passengerName"]').clear().type('Rabih');
    cy.get('button[type="button"]').click({force: true});
    cy.wait(2500)
    cy.contains("Discard changes?")
    cy.contains("Request History")
    cy.wait(2500)
    cy.contains("DIALOG_MESSAGES.DISCARD").click()
    cy.wait(1500)
  })
 })

  describe('test Case 6', () => {

  it(`Verify Approving of a row where the column "Request Type" is of value "Special Uplift" then it goes to approved tab `, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.wait(1500)
    cy.contains("2022-04-15").click()
    cy.wait(1500)
    cy.get('button.btn-success').click();
    cy.wait(1500)
    // cy.contains("Cancel").click()
    cy.contains('button', 'Approve Request').click();
    cy.contains("Approved").click()
    cy.contains("2022-04-15")
  })
 })
  describe('test Case 7', () => {

  it(`Verify Cancellation of a row where the column "Request Type" is of value "Special Uplift then the modal is dismissed and the user is navigated back to previous page" `, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.contains("2023-03-29").click()
    cy.get('button.btn-danger').click();
    cy.wait(1500)
    cy.get('textarea[id="reason"]').type("health")
    cy.contains('Cancel Request').click()
  })
 })
 describe('test Case 8', () => {

  it(`Verify Declining of a row where the column Request Type is of value Special Uplift`, () => {
    cy.visit(' https://itxi-recruiter-extract.web.app/login')
    cy.contains('MEA Crewtablet Portal v1.29.0 (1880)')
    cy.get('input[type="email"]').type("qaquiz@gmail.com")
    cy.get('input[type="password"]').type("Test@123")
    cy.contains('Login').click()
    cy.wait(2000)
    cy.contains("Awaiting Approvals").click()
    cy.wait(4000)
    cy.contains("2023-03-29").click()
    cy.wait(1500)
    cy.contains("Decline").click()
    cy.get('textarea[id="reason"]').type("due to work time")
    cy.wait(2000)
    cy.get('button.btn-danger:contains("Decline Request")').click();
  })
 })

