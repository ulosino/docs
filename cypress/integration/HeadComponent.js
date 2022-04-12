// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Head Component and SEO Testing", () => {
  it("Should test that our Next.js Head components are applied correctly and receiving data on dynamic pages", () => {
    // Test a manually encoded static page
    cy.visit("/");
    cy.title().should("include", "Documentation");

    cy.visit("/docs/core");
    cy.title().should("include", "Browse, Search, & Matches");
  });
});
