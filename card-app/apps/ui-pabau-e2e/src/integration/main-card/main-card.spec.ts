describe('ui-pabau: MainCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=maincard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to MainCard!');
    });
});
