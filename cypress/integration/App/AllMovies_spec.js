describe('All Movies', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should see the app when the user visits localhost:3000', () => {
      // .contains('Rancid Tomatillos')
      cy.get('header')
        .contains('Rancid Tomatillos')
  })
  it('Should see a movie\' details when clicking on a movie poster', () => {
      cy.get("a[name='Mulan']")
        .click()
      cy.contains("When the Emperor of China")
      cy.get("img")
  })

  it('Should return home after clicking the back button', () => {
    cy.visit('http://localhost:3000/337401')
      .get("button")
      .click()
    cy.url().should('eq','http://localhost:3000/')
  })

  it('Should be rendering AllMovies data from Heroku API', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      fixture: 'movies.json' 
    })
    cy.get("a[name='Money Plane']").find("img").should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg")
  })

  it('Should be rendering Movie data on a single movie page', () => {
    cy.visit('http://localhost:3000/337401')
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/337401', {
      fixture: 'singleMovie.json' 
    })
    cy.get("img").should("have.attr", "src").should("include", "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg")
    cy.contains("Action")
  })

  it('Should be able to use the back and forward buttons within the browser', () => {
    cy.visit('http://localhost:3000/337401')
    cy.go('back')
    cy.url().should('eq','http://localhost:3000/')
    cy.go('forward')
    cy.url().should('eq','http://localhost:3000/337401')
  })






  
  

})