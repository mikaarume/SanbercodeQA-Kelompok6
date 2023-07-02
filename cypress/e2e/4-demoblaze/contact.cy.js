describe('Contact Scenario', () => {
  it('See contact', () => {
    // cy.intercept('**').as('requests')
    cy.visit('https://www.demoblaze.com/')
    cy.get(':nth-child(2) > .nav-link').should('be.visible')
  })
    it('Write Message', () => {
      // cy.intercept('**').as('requests')
      cy.visit('https://www.demoblaze.com/')
      cy.get(':nth-child(2) > .nav-link').should('be.visible')
  }) 
})