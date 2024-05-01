export default function InformationPage() {
    const information = `Elokuvasovellus on toteutettu osana Oulun ammattikorkeakoulun Web –ohjelmoinnin sovellusprojekti -kurssia. Projektin toimeksiantona oli luoda sivusto elokuvaharrastelijoille. Keskeisenä tavoitteena oli tarjota kattava alusta, joka yhdistää kirjoihin perustuvat elokuvat intohimoisten elokuvaharrastelijoiden keskuudessa. Sovelluksen kehittämisen lähtökohtana oli hyödyntää avoimen datan tarjoamaa pääsyä laajaan elokuvatietokantaan. Päädyimme käyttämään projektissa IMDb:tä avoimen datan lähteenä. Projektissa loimme oman palvelimen ja tietokannan, jotka mahdollistivat sovelluksen oman datan hallinnan. Yhdistämällä avoimen datan ja omat tekniset ratkaisut pyrimme luomaan kiinnostavan ympäristön kaikille sovelluksen käyttäjille.`;
  
    return (
      <div className='information'>
        <h1>Oma tiedot</h1>
        <p>{information}</p>
      </div>
    );
  }
