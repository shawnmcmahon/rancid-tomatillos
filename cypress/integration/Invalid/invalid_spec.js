describe('Invalid paths', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should see 404 status code error when trying to input characters that are not digits', () => {
    cy.visit('http://localhost:3000/asdfg')
    cy.contains('404 Error')
  });

  it('Should have the ability to return home after visiting an invalid path', () => {
    cy.visit('http://localhost:3000/asdfg')
      .get('a').click()
      .get('.all-container')
      .find('img')
      .should('have.length', 40)
  });

  it('Should see 404 status code error when trying add characters after a valid movie url ', () => {
    cy.visit('http://localhost:3000/337401/')
    cy.contains('Mulan')
    cy.visit('http://localhost:3000/337401/a')
    cy.contains('404 Error')
  });


});





