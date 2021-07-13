describe('User login', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should see the app when the user visits localhost:3000', () => {
      // .contains('Rancid Tomatillos')
      cy.get('header')
        .contains('Rancid Tomatillos')
  })

  it('Clicking on a movie poster should return a unique URL with the movies\' information', () => {
      cy.get("a[name='Mulan']")
        .click()
      cy.contains("When the Emperor of China")
      cy.get("img")
  })
  

})