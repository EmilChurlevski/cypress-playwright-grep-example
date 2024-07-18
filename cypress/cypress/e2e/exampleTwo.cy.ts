describe('Example tag array tests', () => {

  beforeEach('Visit', () => {
    cy.visit('/');
  });

  it('should not run', () => {
    cy.contains('Wait Conditions')
      .should('be.visible');
  });

  it('should run with both tags', { tags: ['@smoke', '@uitest']}, () => {
    cy.get('div a.btn')
      .should('have.length', 8);

  });
});