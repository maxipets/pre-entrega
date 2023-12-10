describe('Desafio 4', () => {

    it('Registrar, loggear y eliminar un usuario', () => {
        
       
        
        cy.request({
            method: "POST",
            url: "https://pushing-it.onrender.com/api/login",
            body: {
            
                    "username": "maxipets2",
                    "password": "maxi123",       
                }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.user.username).to.be.equal("maxipets2")
            expect(respuesta.body.user.gender).to.be.equal("Male")
            expect(respuesta.body.user.day).to.be.equal("7")
            expect(respuesta.body.user.month).to.be.equal("March")
            expect(respuesta.body.user.year).to.be.equal("1985")
            })
        
        cy.request({
            method: "DELETE",
            url: "https://pushing-it.onrender.com/api/deleteuser/maxipets2",
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.user.username).to.be.equal("maxipets2")
            expect(respuesta.body.user.gender).to.be.equal("Male")
            expect(respuesta.body.user.day).to.be.equal("7")
            expect(respuesta.body.user.month).to.be.equal("March")
            expect(respuesta.body.user.year).to.be.equal("1985")
            })

    })
 })