/// <reference types="cypress" />

describe('user profile view', () => {
  beforeEach(() => {
    cy.intercept(
      {
        method: 'GET',
        url: '/users/session',
      },
      { fixture: 'session' },
    ).as('getSession');

    cy.intercept(
      {
        method: 'GET',
        url: '/users/6366951876e4a823d7fcf17e',
      },
      { fixture: 'userDetails' },
    ).as('getUserDetails');

    cy.visit('http://127.0.0.1:8080/konto');

    cy.wait(['@getSession', '@getUserDetails']);
  });

  it('check translations', () => {
    cy.contains('button', 'EN').click();
    cy.contains('h1', 'Edit profile').should('be.visible');
    cy.contains('h2', 'User details')
      .should('be.visible')
      .siblings('form')
      .within(() => {
        cy.contains('label[for="name"]', 'Name').should('be.visible');
        cy.contains('label[for="surname"]', 'Surname').should('be.visible');
        cy.contains('label[for="email"]', 'Email').should('be.visible');
        cy.contains('button[type="submit"]', 'Submit').should('be.visible');
      });
    cy.contains('h2', 'Password change')
      .should('be.visible')
      .siblings('form')
      .within(() => {
        cy.contains('label[for="current-password"]', 'Old password').should('be.visible');
        cy.contains('label[for="password"]', 'New password').should('be.visible');
        cy.contains('label[for="repeat-password"]', 'Repeat new password').should('be.visible');
        cy.contains('button[type="submit"]', 'Submit').should('be.visible');
      });
  });

  it.only('check password change form validation', () => {
    cy.contains('h2', 'Zmiana hasła')
      .siblings('form')
      .within(() => {
        cy.get('input#current-password').type('Haslo123?', { delay: 5 }).should('have.value', 'Haslo123?');
        cy.get('input#password').type('Haslo123', { delay: 5 }).should('have.value', 'Haslo123');
        cy.get('input#repeat-password').type('Haslo123', { delay: 5 }).should('have.value', 'Haslo123');
        cy.contains('button[type="submit"]', 'Zatwierdź').click();
        cy.contains('label[for="password"]', 'Nowe hasło').should('be.visible');
        cy.contains(
          'p',
          'Hasło musi zawierać co najmniej 8 znaków, jedną wielką literę, jedną małą literę, liczbę oraz znak specjalny',
        ).should('be.visible');

        cy.get('input#repeat-password').type('4', { delay: 5 });
        cy.contains('button[type="submit"]', 'Zatwierdź').click();
        cy.contains('p', 'Podane hasła się nie zgadzają').should('be.visible');

        cy.get('input#current-password').clear();
        cy.get('input#password').clear().type('Haslo123?', { delay: 5 });
        cy.get('input#repeat-password').clear().type('Haslo123?', { delay: 5 });
        cy.contains('button[type="submit"]', 'Zatwierdź').click();
        cy.contains('p', 'Pole bieżące hasło nie może być puste').should('be.visible');
      });
  });
});
