export class ProductPage {
    agregarproducto(producto) {
        cy.get(`[id^="${producto}"]`).click();
        
    };
    
};