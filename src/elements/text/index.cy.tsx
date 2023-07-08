import { Text } from "./index"

describe("<Text />", () => {
    it("renders", () => {
        cy.mount(
            <Text type="body2" id={"text"} key={"text"}>
                Click me!
            </Text>
        )
    })

    it("text", () => {
        cy.mount(
            <Text type="body2" id={"text"} key={"text"}>
                Click me!
            </Text>
        )
        cy.get("[id=text]").should("contains.text", "Click me!")
    })
})
