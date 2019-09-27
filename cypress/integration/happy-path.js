// Happy path: user opens site, open article url, open comment page, open author page

describe('HomePage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080') 
  })
  it('Properly renders comment page', () => {
    cy.get('#goButton')
      .click()

    cy.contains('Hello my friend')
      .should('be.visible')
  })

  // it('renders comment component when comment link is clicked', () => {
  //   cy.get('#commentLink').click()

  // })

  // how do I find the individual items though? it's using css and queryselector :(
  it('loads list of post when first visiting', () => {
    
  })

})