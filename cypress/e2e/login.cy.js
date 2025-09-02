context('Actions', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })

  it('validation of texts for any item on form', () => {
   cy.get('h1').should('have.text','Admin Login').wait(1000)
   cy.get('[for="email"]').should('have.text','Email')
   cy.get('[for="password"]').should('have.text','Password')
   cy.get('input[type="submit"]').contains('Login')
  })

  // it('fail input for login', () => {
  //  cy.get('h1').should('have.text','Admin Login')
  //  cy.get('[name="email"]')
  //  .clear()
  //  .type('123@123.com')
  //  cy.get('[name="password"]')
  //  .clear()
  //  .type('123')
  //  cy.get('input[type="submit"]').contains('Login').click() 
  //  cy.get('.swal2-popup').should('contain.text','Incorrect email or password.')
  //  cy.get('.swal2-confirm').contains('OK')
  // })

  // it.only('valition of items on main screen', () => {
  //  cy.get('h1').should('have.text','Employee Management Software')
  //  cy.get('button').should('contain.text','Add Employee')
   
  // })

})
