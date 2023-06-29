import { Text } from "../../../src/elements/text"

it("text", () => {
    cy.mount(<Text type="body2">Click me!</Text>)
    cy.get("button").should("contains.text", "Click me!")
})
