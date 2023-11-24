/// <reference types="cypress"
import { Loginpage } from "../support/loginpage";
import { ProductPage } from "../support/productsPage";
import { ShoppingCartPage } from "../support/shoppingPage";
describe ("pre-entrega",()=>{
    let datos;
    const loginpage = new Loginpage()
    const productPage = new ProductPage()
    const shoppingPage = new ShoppingCartPage()
    before(() => {
        cy.fixture("productos").then((data) => {
          datos = data;
        })
    })
    beforeEach (()=>{
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        loginpage.escribirUsuario(Cypress.env().usuario);
        loginpage.escribirContraseña(Cypress.env().contraseña);
        loginpage.clicklogin();
        cy.wait(2000);
        cy.get('#onlineshoplink').click();
        
        });
        it('pre-entrega',()=>{
            productPage.agregarproducto(datos.nombreselector1);
            cy.get('#closeModal').click();
            productPage.agregarproducto(datos.nombreselector2);
            cy.get('#closeModal').click();
            cy.get('#goShoppingCart').click ();
            shoppingPage.verificarproducto(datos.nombreproducto1);
            shoppingPage.verificarprecio(datos.precioproducto1)
            shoppingPage.verificarproducto(datos.nombreproducto2);
            shoppingPage.verificarprecio(datos.precioproducto2)
            cy.get('.css-n1d5pa > .chakra-button').click ()
            cy.get('#price > b').should('have.text',"28")




        })
})
