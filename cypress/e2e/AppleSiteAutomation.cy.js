describe('Test Cases - Apple', () => {
    beforeEach(() => {
      cy.visit('https://www.apple.com/');
    });
  
  let scrollProps = {
    duration: 8000,
    easing: 'swing'
  }
  it('Should Redirect to the Apple Website', () => {
    cy.visit('https://www.apple.com/')
   
    })

it('Checks the Functionalities of the Iphone Web Page', () => {
  cy.get('.globalnav-link-text')
.contains('iPhone').should('be.visible').parent().click();
//Compare
cy.get('.chapternav-item-compare').click();
cy.contains('Chat with a Specialist').click();

//Assertion to Check if the Summary is there
cy.get('.section-summary > :nth-child(1) > :nth-child(1) > .compare-rowheader > span').should('contain','Summary');
let array1 = ["iPhone 16","iPhone 16 Pro"];
let array2 = ["iPhone 16 Plus", "iPhone 16e"];
var selectarr1 = array1[Math.floor(Math.random() * array1.length)];
var selectarr2 = array1[Math.floor(Math.random() * array2.length)];
cy.get('#selector-0').select(selectarr1);
cy.get('#selector-1').select(selectarr2);

//Buy Iphone and Scroll
cy.get('.first-child > .button').should('contain','Buy').click();
cy.go('back');
cy.reload();
//Learn More
cy.get(':nth-child(4) > .first-child > .compare-link > .icon-copy').should('contain','Learn more').click();
//Cypress.runner.stop();
  })


  it('Checks the Functionalities of the IPad', () => {
    cy.get('.globalnav-item-ipad > .globalnav-submenu-trigger-group > :nth-child(1) > .globalnav-link').should('contain','iPad').click();
    cy.get('.ChapterNav_chapternav-items__G0AR3 > :nth-child(2)').contains('iPad Air').click();
    //Scroll
    for(let i=2;i>0;i--){
      cy.get(`#product-gallery-gallery > .paddlenav > ul > :nth-child(${i}) > .paddlenav-arrow`)    
      .should('be.visible')
      .then($btn => {
        if (!$btn.is(':disabled')) {
          cy.wrap($btn).click();
          cy.wait(2000); // give time for slide animation
        } else {
          cy.log(`Button ${i} is disabled, skipping click.`);
        }
      });
    }
   
    })

    it('Checks the Functionalities of the Entertainment Section', () => {
      cy.get('.globalnav-item-entertainment > .globalnav-submenu-trigger-group > :nth-child(1) > .globalnav-link > .globalnav-link-text-container').should('contain','Entertainment').click();
      cy.get('.chapternav-item-apple-books').contains('Apple Books').click();
  
      cy.scrollTo(0, 4000, scrollProps);
      cy.scrollTo(4000, 0, scrollProps);

      //URL Assertion
      cy.url().should('include','apple-books');
     
      })

      it('Checks the Functionalities of the Apple Watch Section', () => {
        cy.get('.globalnav-item-watch > .globalnav-submenu-trigger-group > :nth-child(1) > .globalnav-link > .globalnav-link-text-container').eq(0).click();
      

        cy.scrollTo(0, 25000, scrollProps);
        cy.scrollTo(0, 0, scrollProps);
        cy.get('.chapternav-item-compare').click();
        const appleWatcharr1 = ["Apple Watch Series 10","Apple Watch Series 9","Apple Watch Series 8"];
        const appleWatcharr2 = ["Apple Watch Series 10","Apple Watch Series 9","Apple Watch Series 8"];
        var watch1 = appleWatcharr1[Math.floor(Math.random()* 2)];
        var watch2 = appleWatcharr2[Math.floor(Math.random()* 2)];
        cy.get('#selector-0').select(watch1);
        cy.get('#selector-1').select(watch2);
        cy.get('.button').eq(0).click();
       
        })

        it('Checks the Functionalities of the Accessories Section', () => {
          cy.get('.globalnav-item-accessories > .globalnav-submenu-trigger-group > :nth-child(1) > .globalnav-link > .globalnav-link-text-container').click();
          cy.scrollTo(0,50, {
          duration: 2000,
          easing: 'swing'   
  });
        cy.get('.form-textbox-input').type('Apple Watch').type('{enter}');
        cy.url().should('include','/search/Apple-Watch');
  //cy.scrollTo(0,3500, scrollProps);
  //cy.scrollTo(0,0, scrollProps);
        let sortArray = ["Relevancy","Popularity","Newest","Price: Low to High", "Price: High to Low"];
        cy.get('.rf-accessories-sort-selected').click();
        cy.contains(sortArray[1]).click();
        cy.getCookies();
        cy.log('Accessories Done!');
         
          })
        

          it.only('Checks the functionality of the Store Section',()=>{
            cy.get('.globalnav-item-store > .globalnav-submenu-trigger-group > :nth-child(1) > .globalnav-link > .globalnav-link-text-container')
            .should('contain','Store').trigger('mouseover').contains('Find a Store').click();
          })
        })



