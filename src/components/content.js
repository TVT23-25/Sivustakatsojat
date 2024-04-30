import React from "react";
import './content.css';

const Content = () => {
  return (
    <div className='content'>
      <h3>Elokuvasovellus Sivustakatsojat</h3>
      <p>
        Elokuvasovellus on toteutettu osana Oulun ammattikorkeakoulun Web –ohjelmoinnin sovellusprojekti -kurssia. Projektin toimeksiantona oli luoda sivusto elokuvaharrastelijoille. Keskeisenä tavoitteena oli tarjota kattava alusta, joka yhdistää kirjoihin perustuvat elokuvat intohimoisten elokuvaharrastelijoiden keskuudessa. Sovelluksen kehittämisen lähtökohtana oli hyödyntää avoimen datan tarjoamaa pääsyä laajaan elokuvatietokantaan. Päädyimme käyttämään projektissa IMDb:tä avoimen datan lähteenä. Projektissa loimme oman palvelimen ja tietokannan, jotka mahdollistivat sovelluksen oman datan hallinnan. Yhdistämällä avoimen datan ja omat tekniset ratkaisut pyrimme luomaan kiinnostavan ympäristön kaikille sovelluksen käyttäjille.
      </p>
      
      <h3>Kuva elokuvateatterista</h3>
      {<img src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/279964341_5026589747457733_148937258842395502_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Vow8lwghMxUQ7kNvgFClBhi&_nc_ht=scontent-arn2-1.xx&oh=00_AfCfDAWH-oEo8_Llx_ljk4nrPpEmqwD9sPEbrTOPRcmvdQ&oe=66367E0C" alt="Kuva etusivulta" />}

      <h3>Projektin idea</h3>
      <p>
        Sivustakatsoja-projektimme ydin on tarjota kattava sivusto elokuvaharrastajille, jotka haluavat keskustella kirjoihin perustuvista elokuvista. Projektimme on lisäksi avoin kaikille, jotka rakastavat sekä kirjallisuutta että elokuvia. Sovellus tarjoaa yhteisön, jossa voit ilmaista itseäsi vapaamuotoisesti ja ryhmänjäsenet voivat jakaa mielipiteitä, arvosteluita ja suosituksia kirjallisuudesta ja elokuvista toisten elokuvaharrastelijoiden kanssa ympäri Suomea. Sivustomme tarjoaa kokoelmaa elokuvista, jotka pohjautuvat kirjoihin eri aihealueissa ja tyylilajeissa. Sovelluksesta voit löytää tietoa suosikkikirjojesi elokuvaversioista tai tutkia uusia kiinnostavia toteutuksia.
      </p>
      
      <h3>Toteutus</h3>
      <p>
        Projekti on rakennettu React-sovelluksena, jota on kehitetty Visual Studio Coden avulla. Tietokantana käytämme PostgreSQL:ää. Palvelinpuolen olemme toteuttaneet Node.js-alustalla. Käyttämämme koodikielet ovat JavaScript, HTML ja CSS. Sovelluksen käyttöliittymän suunnitteluun olemme käyttäneet (Tähän ohjelma mitä käytetty) ja tietokannan ER-kaavion luontiin (tähän sovelluksen nimi käytetty).
      </p>

      <h3>Vastuualueet (alustava)</h3>
      <p>
        Jenna Manninen: Ryhmänsivun luonti, käyttäjän lisäys ja poisto sekä UI-pohja Reactilla <br/>
        Maiju Alastalo: Suodatettu haku (elokuvat ja sarjat), README-tiedosto <br/>
        Jenna Harle: PostGRE-tietokannan luonti, README-tiedosto <br/>
        Laura Varvelin: ER-kaavio, testaus (esim. Chai, Mocha) <br/>
        Sami Petäjärvi: Käyttäjän luonti, kirjautuminen ja poistaminen sekä REST-dokumentaatio
      </p>
    </div>
  );
};

export default Content;
