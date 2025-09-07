describe('Link Verification', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should navigate to the Privacy Policy page', () => {
    cy.get('footer').contains('a', 'Privacy Policy').click()
    cy.url().should('include', '/privacy')
    cy.contains('h1', 'CrystalView.ai Privacy Policy').should('be.visible')
  })

  it('should navigate to the EULA page', () => {
    cy.get('footer').contains('a', 'EULA').click()
    cy.url().should('include', '/eula')
    cy.contains('h1', 'CrystalView.ai End-User License Agreement (EULA)').should('be.visible')
  })

  it('should have a working link to the Vision page', () => {
    cy.get('header').contains('a', 'Vision')
      .should('have.attr', 'href', 'https://vision.crystalview.ai')
      .should('have.attr', 'target', '_blank')
  })

  it('should scroll to the Solutions section when header link is clicked', () => {
    cy.get('header').contains('a', 'Solutions').click()
    cy.url().should('include', '#solutions')
    cy.get('#solutions').should('be.visible')
  })

  it('should scroll to the Services section when header link is clicked', () => {
    cy.get('header').contains('a', 'Services').click()
    cy.url().should('include', '#services')
    cy.get('#services').should('be.visible')
  })

  it('should navigate to the Contact page when "Get Started" is clicked', () => {
    cy.contains('a', 'Get Started').click()
    cy.url().should('include', '/contact')
    cy.contains('h1', 'Contact Us').should('be.visible')
  })

  it('should navigate to the Contact page when header "Contact" is clicked', () => {
    cy.get('header').contains('a', 'Contact').click()
    cy.url().should('include', '/contact')
    cy.contains('h1', 'Contact Us').should('be.visible')
  })

  it('should navigate to the Contact page when footer "Contact" is clicked', () => {
    cy.get('footer').contains('a', 'Contact').click()
    cy.url().should('include', '/contact')
    cy.contains('h1', 'Contact Us').should('be.visible')
  })

  it('should navigate to the Contact page when "Request a Consultation" is clicked', () => {
    cy.contains('a', 'Request a Consultation').click()
    cy.url().should('include', '/contact')
    cy.contains('h1', 'Contact Us').should('be.visible')
  })

  context('On Contact Page', () => {
    beforeEach(() => {
      cy.visit('/contact')
    })

    it('should load the embedded Google Form', () => {
      cy.get('iframe').should('be.visible').and('have.attr', 'src').should('include', '1FAIpQLSe9rwtgdn6eLJEcSK4bVQVPDxvc0lX1fYjiGnH56Mj0f9_aGQ')
    })

    it('should navigate to the homepage Solutions section', () => {
      cy.get('header').contains('a', 'Solutions').click()
      cy.url().should('match', /\/#solutions$/)
      cy.get('#solutions').should('be.visible')
    })

    it('should navigate to the homepage Services section', () => {
      cy.get('header').contains('a', 'Services').click()
      cy.url().should('match', /\/#services$/)
      cy.get('#services').should('be.visible')
    })
  })
})


