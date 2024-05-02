// Lataa tarvittavat 
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const App = require('../App');
chai.use(chaiHttp);

// Testi uuden käyttäjän rekisteröintiä
it('Rekisteröi uuden käyttäjän', () => {
    // Tee HTTP POST -pyyntö
    chai.request(App)
        .post('/SignUp')
        .send(userCredentials)
        .end((err, res) => {
            // Tarkista vastauksen odotetut ominaisuudet
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('success').to.be.true;
            chai.expect(res.body).to.have.property('message').to.equal('Rekisteröinti onnistui');
            chai.expect(res.body.user).to.have.property('username').to.equal(userCredentials.username);
            done();
        });
})

