/// <reference types="cypress"/>

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

beforeEach(() => {
  cy.visit("https://template1.booost.bg/feello/index");
});

it("Should have profile badge which is 80x80 px", () => {
  cy.get("[data-cy=profile-badge] > img")
    .should("have.css", "width", "80px")
    .should("have.css", "height", "80px");
});

it("Hovering the home button should open a menu with 4 elements", () => {
  cy.get('[href="#sub-1"]').trigger("mouseover");
  cy.get('[id="sub-1"]').children().should("have.length", 4);
});

it("Should open search bar after clicking on search button", () => {
  cy.get(".search-btn").click();
  cy.get(".modal-content").should("have.css", "visibility", "visible");
});

it("Carousell shoud contain 'Healthy eating is the key to staying healthy' after clicking right arrow then left arrow", () => {
  cy.scrollTo(0, 1000);
  cy.get(".row > .btn-next > svg").click();
  cy.wait(1000);
  cy.get(".row > .btn-prev > svg").click();
  cy.get("#slick-slide12 > .card > .card-body").contains(
    "Healthy eating is the key to staying healthy"
  );
});

it("Shoud scroll 4 times throughout the carousel", () => {
  cy.scrollTo(0, 1000);
  cy.get(".row > .btn-next > svg").click();
  cy.wait(1000);
  cy.get(".row > .btn-next > svg").click();
  cy.wait(1000);
  cy.get(".row > .btn-next > svg").click();
  cy.wait(1000);
  cy.get(".row > .btn-next > svg").click();
  cy.wait(1000);
  cy.get("#slick-slide13 > .card > .card-body").should("exist");
});
