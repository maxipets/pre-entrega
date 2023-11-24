 export class Loginpage {
    escribirUsuario(usuario){
        cy.get('#user').type(usuario)

    };
    escribirContraseña(contraseña){
        cy.get('#pass').type(contraseña)

    };
    clicklogin(){
        cy.get('#submitForm').click()

    };
};