context('Actions', () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'))
  })

  it('validation of texts for any item on form login', () => {
    cy.clearAllLocalStorage()
    cy.reload()
   cy.get('h1').should('have.text','Admin Login').wait(1000)
   cy.get('[for="email"]').should('have.text','Email')
   cy.get('[for="password"]').should('have.text','Password')
   cy.get('input[type="submit"]').contains('Login')
  })

  it('fail input for login', () => {
   cy.clearAllLocalStorage()
   cy.reload()
   cy.get('h1').should('have.text','Admin Login')
   cy.get('[name="email"]')
   .clear()
   .type('123@123.com')
   cy.get('[name="password"]')
   .clear()
   .type('123')
   cy.get('input[type="submit"]').contains('Login').click() 
   cy.get('.swal2-popup').should('contain.text','Incorrect email or password.')
   cy.get('.swal2-confirm').contains('OK')
  })

  it('validation of items on main screen', () => {
    const expectedText = [
        'No.',
        'First Name',
        'Last Name',
        'Email',
        'Salary',
        'Date',
        'Actions'
    ]

   cy.get('h1').should('have.text','Employee Management Software')
   cy.get('button').eq(0).should('have.text','Add Employee')
   cy.get('button').eq(1).should('have.text','Logout')
    cy.get('table thead th').each(($cell, index) => {
        expect($cell.text().trim()).to.eq(expectedText[index])
    })
  })

  it('validation of create', () => {
     cy.get('button').eq(0).should('have.text','Add Employee')
      .click()
      cy.get('[name="firstName"]')
       .click()
       .type('First name test')
      cy.get('[name="lastName"]')
       .type('Last name test')
      cy.get('[name="email"]')
       .type('email@teste.com')
      cy.get('[name="salary"]')
      .type(5000)
      cy.get('[name="date"]')
      .type("2025-09-02")
      .blur()

      cy.get('[type="submit"]')
      .click()
    //   cy.get('[type="button"]')
    cy.get('.swal2-popup').should('contain.text',"Added!")
  })

  it('cancel create', () => {
     cy.get('button').eq(0).should('have.text','Add Employee')
      .click()
      cy.get('[name="firstName"]')
       .click()
       .type('First name test')
      cy.get('[name="lastName"]')
       .type('Last name test')
      cy.get('[name="email"]')
       .type('email@teste.com')
      cy.get('[name="salary"]')
      .type(5000)
      cy.get('[name="date"]')
      .type("2025-09-02")
      .blur()

      cy.get('[type="button"]')
      .click()

      cy.get('h1').should('have.text','Employee Management Software')
  })

  it('viewport test', () => {
     cy.viewport(760,768)
     cy.viewport('samsung-s10')
     cy.viewport('macbook-15')
     cy.viewport(390,844)
     cy.viewport(430,932)
  })
})
