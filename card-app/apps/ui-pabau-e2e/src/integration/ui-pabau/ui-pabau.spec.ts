describe('ui-pabau: UiPabau component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=uipabau--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to UiPabau!');
    });
});
