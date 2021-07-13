describe('User login', () => {

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






  
  

})