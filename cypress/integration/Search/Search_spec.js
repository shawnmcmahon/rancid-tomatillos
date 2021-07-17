describe('Search', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });

  it('Should see an empty search bar on page load', () => {
    cy.get('input')
      .should('have.attr', 'placeholder', 'Search for movies')
  })

  it('Should see the entire selection of all 40 movies on page load', () => {
    cy.get('.all-container')
      .find('img')
      .should('have.length', 40)
  })

  it('Should see only one movie when the user types string "Mulan" in the search input', () => {
    cy.get('input').type('Mulan')
      .get('button').click()
      .get('.all-container')
      .find('img')
      .should('have.length', 1)
  })

  it('Should see all 40 movies after deleting a search query', () => {
    cy.get('input').type('Money Plane')
      .get('button').click()
      .get('.all-container')
      .find('img')
      .should('have.length', 1)
      .get('input').clear()
      .get('button').click()
      .get('.all-container')
      .find('img')
      .should('have.length', 40)
  })

  it('Should see only two movies when the user types string "and" in the search input', () => {
    cy.get('input').type('and')
      .get('button').click()
      .get('.all-container')
      .find('img')
      .should('have.length', 2)
  })

  it('Should see no movies and an error message when the user types string "asdf" in the search input', () => {
    cy.get('input').type('asdf')
      .get('button').click()
      .get('.all-container')
      .find('img')
      .should('have.length', 0)
    cy.contains('No movies matching search - please try another query')
  })





})