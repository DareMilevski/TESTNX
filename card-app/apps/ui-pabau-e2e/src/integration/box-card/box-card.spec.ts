describe('ui-pabau: BoxCard component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=boxcard--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to BoxCard!');
    });
});
