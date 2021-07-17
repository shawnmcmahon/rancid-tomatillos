describe('Movies', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/337401');
  });

  it('Should see a movie\' details when clicking on a movie poster', () => {
    cy.contains("When the Emperor of China")
    cy.get("img")
  })

  it('Should return home after clicking the back button', () => {
    cy.get("button")
      .click()
    cy.url().should('eq','http://localhost:3000/')
  })

  it('Should be rendering Movie data on a single movie page', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      fixture: 'singleMovie.json' 
    })
    cy.get("img").should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    cy.contains("Action")
  })

  it('Should be able to use the back and forward buttons within the browser', () => {
    cy.visit('http://localhost:3000/')
    cy.go('back')
    cy.url().should('eq','http://localhost:3000/337401')
    cy.go('forward')
    cy.url().should('eq','http://localhost:3000/')
  })

  it('Should see a movie trailer when visiting a single movie page', () => {
    cy.get('iframe')
      .should('have.attr', 'title', 'Embedded youtube')
  })



})