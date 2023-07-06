import { Text } from "../../src/elements/text"

it("text", () => {
    cy.mount(
        <Text type="body2" id={"text"} key={"text"}>
            Click me!
        </Text>
    )
    cy.get("[id=text]").should("contains.text", "Click me!")
})
