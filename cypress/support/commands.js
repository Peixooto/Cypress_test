// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
  cy.clearAllLocalStorage()
  cy.visit('https://safdarjamal.github.io/crud-app/')
  cy.get('h1').should('have.text','Admin Login')
   cy.get('[name="email"]')
   .clear()
   .type(username)
   cy.get('[name="password"]')
   .clear()
   .type(password)
   cy.get('input[type="submit"]').contains('Login').click() 
   cy.get('.swal2-loader')
   cy.get('#swal2-title').should('have.text','Successfully logged in!')

  // Exemplo: espera redirecionar para dashboard
  cy.url().should('include', '/crud-app/')
})