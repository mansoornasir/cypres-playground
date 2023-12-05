describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


// cypress/integration/sample_spec.js

describe('My First Cypress Test', () => {
  it('Visits the homepage', () => {
    // Open the specified URL
    cy.visit('https://example.com');

    // Check if the page contains the expected text
    cy.contains('Example Domain').should('exist');
  });

  it('Interacts with an element', () => {
    // Open the specified URL
    cy.visit('https://example.com');

    // Type text into an input field
    cy.get('input[type="text"]').type('Cypress Test');

    // Click on a button
    cy.get('input[type="submit"]').click();

    // Check if the page contains the expected text after the interaction
    cy.contains('Hello Cypress Test!').should('exist');
  });
});



// cy.get('input',{ timeout: 1000 })
// cy.contains('type').click()
// cy.url().should('include', '/commands/actions')
cy.get('.action-email').type('fake@email.com')
cy.get('.action-email').should('have.value', 'fake@email.com')
cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length',9);


<ul>
  <input>Cypress</input>
  <input>Cucumber</input>
  <input>Gherkin</input>
  <input>JBehave</input>
  <input>BDD</input>
</ul>

cy.get('input').eq(1).should('contain', 'Cucumber')
cy.get("").should("be.disabled")
cy.get("").should("be.visible")

cy.get('.mobile-nav', { timeout: 10000 })
  .should('be.visible')
  .and('contain', 'Home')

  cy.get('#loginButton')
  .should('have.class', 'active')
  .and('have.attr', 'href', '/login')

  cy.get('.tsc_table_s13')
      .find('tbody tr:last')
      .should('have.class', 'odd')
      .find('td')
      .first()

      .dblclick()
      .rightclick()

      .clear()

      .check()
      .uncheck()

      .select(value)


      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')



      before(function () {
        cy.fixture('example').then(function (data) {
          this.data = data;
        })
      })


      cy.get('#reg_username').type(this.data.Username);
    cy.get('#reg_email').type(this.data.Email);
    cy.get('#reg_password').type(this.data.Password)