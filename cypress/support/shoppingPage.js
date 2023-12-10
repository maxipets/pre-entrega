export class ShoppingCartPage {
    verificarproducto(producto) {
     
      cy.get(':nth-child(2) > .css-1l5ko5i > #productName').then((datos) => {
        cy.contains(producto).should('have.text',producto);
      });
      
    };
  verificarprecio(producto){
    cy.get(':nth-child(2) > .css-1l5ko5i > #productPrice').then((datos) => {
        cy.contains(producto).should('have.text',producto);
      });
       
  }
  

  };
  