describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.apple.com/ae/?cid=aos-ae-kwgo-brand')
    getIphone();
  })
})

function getIphone(){
  cy.get('.globalnav-item-iphone > .globalnav-submenu-trigger-group > :nth-child(1) > .globalnav-link > .globalnav-link-text-container').trigger('mouseover').should('be.visible').click();
//Compare
cy.get('.chapternav-item-compare').click();
cy.contains('Chat with a Specialist').click();

//Assertion to Check if the SUmmary is there
cy.get('.section-summary > :nth-child(1) > :nth-child(1) > .compare-rowheader > span').should('contain','Summary');
let array1 = ["iPhone 16","iPhone 16 Pro"];
let array2 = ["iPhone 16 Plus", "iPhone 16e"];
var selectarr1 = array1[Math.floor(Math.random() * array1.length)];
var selectarr2 = array1[Math.floor(Math.random() * array2.length)];
cy.get('#selector-0').select(selectarr1);
cy.get('#selector-1').select(selectarr2);

}