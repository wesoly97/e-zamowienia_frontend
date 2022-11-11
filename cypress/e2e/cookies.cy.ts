/// <reference types="cypress" />

describe('cookie', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);

    cy.visit('http://127.0.0.1:8080');
    cy.clearCookies();
  });

  it('lang functionality', () => {
    cy.contains('button', 'EN').click();
    cy.getCookie('lang').should('have.property', 'value', 'en');
    cy.contains('button', 'PL').click();
    cy.getCookie('lang').should('have.property', 'value', 'pl');
  });
});
