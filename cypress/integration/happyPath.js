describe('HomePage', () => {
  it('Navigate through all page in the app', () => {
    cy.visit('http://localhost:8080')

    // click on the first comment link
    cy.get('[data-testid=comment-link]')
      .first()
      .click()
       
    cy.url()
      .should('contain', '/comment/')

    // go back to homepage
    cy.get('[data-testid=home-link')
      .click()

    // click on the first user link
    cy.get('[data-testid=user-link]')
      .first()
      .click()

    cy.url()
      .should('contain', '/user/')
  })
})