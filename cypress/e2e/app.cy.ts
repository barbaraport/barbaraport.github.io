describe('my portfolio', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:8080')
    })

    it('checks the visible content', () => {
      cy.get('h2').should('have.text', 'Looking for a skilled software developer?')
    })
  }
)