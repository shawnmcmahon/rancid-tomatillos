describe('All Movies', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should see the app when the user visits localhost:3000', () => {
    // .contains('Rancid Tomatillos')
    cy.get('header').contains('Rancid Tomatillos');
  });

  it('Should be rendering AllMovies data from Heroku API', () => {
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/', {
      fixture: 'movies.json',
    });
    cy.get("a[name='Money Plane']")
      .find('img')
      .should('have.attr', 'src')
      .should(
        'include',
        'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg'
      );
  });
});
