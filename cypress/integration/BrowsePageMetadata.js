// This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
// If a copy of the MPL was not distributed with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

describe("Core Documentation Remote Metadata Testing", () => {
  it("Should test that the Browse page is receiving metadata in it's OS Cards", () => {
    cy.visit("/docs/core");

    // Test remote metadata on the Browse page
    // Alpine Linux is at the top of the Operating System List
    cy.get("#testingOSDataCard").find("h2").contains("Advanced Search");
    cy.get("#testingOSDataCard")
      .find("p")
      .contains("Explore ULOSINO's premier search experience.");
    cy.get("#testingOSDataCard").find("h2").contains("Advanced Search").click();
    cy.url().should("include", "/docs/core/advancedsearch");
  });
});
