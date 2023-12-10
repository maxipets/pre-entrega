describe('Desafio 4', () => {

    it('Registrar, loggear y eliminar un usuario', () => {
        
        cy.request({
            method: "POST",
            url: "https://pushing-it.onrender.com/api/register",
            body: {
                "username": "maxipets4",
                "password": "maxi1234!",
                "gender": "Male",
                "day": "7",
                "month": "March",
                "year": "1985",    
                }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.newUser.username).to.be.equal("maxipets4")
            expect(respuesta.body.newUser.gender).to.be.equal("Male")
            expect(respuesta.body.newUser.day).to.be.equal("7")
            expect(respuesta.body.newUser.month).to.be.equal("March")
            expect(respuesta.body.newUser.year).to.be.equal("1985")
            })
        
        cy.request({
            method: "POST",
            url: "https://pushing-it.onrender.com/api/login",
            body: {
                "username": "maxipets4",
                "password": "maxi1234!",    
                }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.user.username).to.be.equal("maxipets4")
            expect(respuesta.body.user.gender).to.be.equal("Male")
            expect(respuesta.body.user.day).to.be.equal("7")
            expect(respuesta.body.user.month).to.be.equal("March")
            expect(respuesta.body.user.year).to.be.equal("1985")
            })
        
        cy.request({
            method: "DELETE",
            url: "https://pushing-it.onrender.com/api/deleteuser/maxipets4",
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(200)
            expect(respuesta.body.user.username).to.be.equal("maxipets4")
            expect(respuesta.body.user.gender).to.be.equal("Male")
            expect(respuesta.body.user.day).to.be.equal("7")
            expect(respuesta.body.user.month).to.be.equal("March")
            expect(respuesta.body.user.year).to.be.equal("1985")
            })

    })
 })