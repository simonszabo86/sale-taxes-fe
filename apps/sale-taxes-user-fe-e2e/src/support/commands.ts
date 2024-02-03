/// <reference types="cypress" />

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// eslint-disable-next-line @typescript-eslint/no-namespace
declare namespace Cypress {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Chainable<Subject> {
    login(email: string, password: string): void;

    getBySel(
      selector: string,
      options?: Partial<Loggable & Timeoutable & Withinable & Shadow>
    ): Chainable<JQuery<HTMLElement>>;

    findBySel(selector: string): Chainable<JQuery<HTMLElement>>;
  }
}

// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});

Cypress.Commands.add('getBySel', (selector, options?) => {
  return cy.get(`[data-test=${selector}]`, options);
});

Cypress.Commands.add('findBySel', { prevSubject: true }, (subject, selector, ...args) => {
  return subject.find(`[data-test=${selector}]`, ...args);
});
