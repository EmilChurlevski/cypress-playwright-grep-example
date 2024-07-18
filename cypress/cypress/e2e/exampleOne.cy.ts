
describe('Example tests', () => {

  beforeEach('Visit', () => {
    cy.visit('/');
  });

  it('should run', { tags: '@smoke' }, () => {
    cy.contains('What is Playground?')
      .should('be.visible');
  });

  it('should not run', () => {
    cy.contains('Available Pages')
      .should('be.visible');
  });
});