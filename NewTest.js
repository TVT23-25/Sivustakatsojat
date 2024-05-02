// tarvittavat
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const App = require('../App');

chai.use(chaiHttp);


// Määritä testit käyttäjätilin hallinnalle
describe('Käyttäjätilin hallinta', () => {
    // Määritä käyttäjätiedot
    const userCredentials = {
        username: 'testuser',
        pw: 'testpassword',
        email: 'testuser@example.com',
        fname: '',
        lname: '',
    };
})

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

  // Testaa sisäänkirjautumista rekisteröidyllä käyttäjällä
  it('Kirjaudu sisään rekisteröidyllä käyttäjällä', () => {
    // Tee HTTP POST -pyyntö
    chai.request(App)
        .post('/SignIn')
        .send({
            email: userCredentials.email,
                pw: userCredentials.pw,
        })
        .end((err, res) => {
            // Tarkista 
            chai.expect(res).to.have.status(401);
            chai.expect(res.body).to.have.property('success').to.be.true;
            chai.expect(res.body).to.have.property('token');
            chai.expect(res.body).to.have.property('message').to.equal('Autentikaatio onnistui');
            done();
        });
});

    // Testaa sisäänkirjautumista
    it('Kirjaudu sisään', (done) => {
    // Tee HTTP POST -pyyntö
    chai.request(App)
        .post('/SignIn')
        .send({
            email: userCredentials.email,
            pw: userCredentials.pw
        })
        .end((err, res) => {
            // Tarkista vastaus
            chai.expect(res).to.have.status(200);
            chai.expect(res.body).to.have.property('success').to.be.true;
            chai.expect(res.body).to.have.property('message').to.equal('Kirjautuminen onnistui');
            chai.expect(res.body).to.have.property('token');
            done();
        });
});

    // testaa poistoa
    it('Poista rekisteröity käyttäjä', (done) => {
        // Tee HTTP DELETE -pyyntö
        chai.request(App)
        .delete(`/deleteAccount/${userCredentials.username}`)
        .end((err, res) => {
            // Tarkista
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('success').to.be.true;
            expect(res.body).to.have.property('message').to.equal('Käyttäjätunnuksen poistaminen onnistui');
            done();
        });
});
    

