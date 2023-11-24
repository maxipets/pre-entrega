export class ShoppingCartPage {
    verificarproducto(producto) {
     
      cy.fixture('productos').then((datos) => {
        cy.contains(producto).should('have.text',producto);
      });
      
    };
  verificarprecio(producto){
    cy.fixture('productos').then((datos) => {
        cy.contains(producto).should('have.text',producto);
      });
       
  }
  

  };
  