# Dienos pietų užsakymo "web" programa

WEB programa (angl. application), kurią pasitelkę miesto gyventojai ir svečiai galėtų rasti informaciją apie dienos pietus, juos užsisakyti ir įvertinti.
Programą (angl. application) sudaro dvi dalys:

1. Administracinė sritis, kur administratorius gali vkurti ir valdyti valgiaraštį.
1. Vieša sritis, kur visi registruoti vartotojai - tiek administratoriai, tiek įprasti - gali peržiūrėti, įvertinti bei užsisakyti šiandienos patiekalsu bei peržiūrėti visos savaitės valgiaraštį.

## Turinys

- [Suplanuotos funkcijos](#funkcijos)
- [Technologijos](#technologijos)
- [Reikalavimai sistemai](#reikalavimai)
- [Diegimas](#diegimas)
- [Naudojimas](#naudojimas)

### Suplanuotos funkcijos

1. **Vartotojo autentifikacija ir autorizacija:** registracija, prisijungimas, prieigos prie administracinės skilties ribojimas pagal rolę.
1. **Valgiaraščio valdymas:** patiekalų kūrimas, redagavimas, trynimas.
1. **Viso valgiaraščio peržiūra:** kiek vieno patiekalo atvaizdavimas kortelėje su nuotrauka, pavadinimu, aprašymu, kaina, savaitės diena, užsakymo ir įvertinimo mygtukai.
1. **Patiekalų paieška:** atvaizdavimas tik tų patiekalų kortelių, kurios atitinka paieškos kriterijus (diena ir/arba pavadinimas).
1. **Šiandienos patiekalų peržiūra:** gaunama šiandienos informacija (metai, mėnuo, diena) ir jai priskiriami atitinkamos savaitės dienos (pirmad. - sekmad.) patiekalai.
1. **Šiandienos patiekalo užsakymas:** tikrinama ar patiekalas priskiriamas šiandienai, aktyvuojamas užsakymo mygtukas, kurį paspaudus, patiekalas išsaugomas vartotojo užsakymų skiltyje.
1. **Vartotojo užsakymų peržiūra:** kiek vienas vartotojas mato kokius patiekalus užsisakė ir užsakymo datą; vartotojai mato tik savo užsakymus, atvaizduojamus patiekalo kortelės forma.
1. **Patiekalo įvertinimas:** tikrinama, ar vartotojas jau yra įvertinęs patiekalą. Jei taip - įvertinimo mygtukas neaktyvus, jei ne - įvertinimo mygtukas aktyvus ir jį paspaudus, "patiktukas" išsaugomas ir iškart atvaizduojamas.

### Technologijos

**_Front-end_:**

1. React
1. Javascript
1. HTML
1. Bootstrap
1. Axios (darbui su API iš _back-end_)

**_Back-end_:**

1. Node.js
1. Express
1. MongoDB ir Mongoose

### Reikalavimai sistemai

Norint pasileisti projektą lokaliai, t.y. savo kompiuteryje, prieš pradedant, įsitikinkite, kad jūsų sistemoje įdiegta:

1. [Node.js](https://nodejs.org/ "https://nodejs.org/")
1. [npm](https://www.npmjs.com/ "https://www.npmjs.com/") (ateina kartu su Node.js)
1. [Postman](https://www.postman.com/)

## Diegimas

#### 1\. Nukopijuokite repozitoriją

```
git clone https://github.com/GintarePav/kitm-exam
```

#### 2\. Įdiekite priklausomybes

Kadangi projektą sudaro du aplankai - _client_ ir _server_ - reikalingus paketus reikės diegti abiejuos. Patikrinkite `package.json` failus, kad matytumėte, kokie paketai naudojami ir įdiekite juos. Tam reikės dviejų komandinių eilučių. Rekomenduojama jas pervadinti į _server_ ir _client_.

1. Atsidarius pirmają, _server_, komandinę eilutę įveskite šias komandas:

```
cd server
npm install
```

1. Atsidarius antrąją, _client_, įveskite šias komandas:

```
cd client
npm install
```

Pastebėsite, kad _server_ dalyje naudojamas _dotenv_ paketas. Dėl saugumo, _congig.env_ failas į repozitoriją nekeliamas ir jį reikės susikurti sau. Jame reiks šių kintamųjų:

```
PORT = 8080
HOST= 127.0.0.1
CLIENT_URL=http://localhost:3000
DATABASE: [jūsų susikurtos MongoDB duombazės konfigūracinė nuoroda]
TOKEN_KEY: [jūsų sugalvotas kodas]
```

_client_ direktorijoje _dotenv_ paketas nereikalingas, tad reiktų susikurti savo _.env_ failą ir ten nurodyti šią informaciją:

```
REACT_APP_SERVER_URL=http://127.0.0.1:8080
```

### Naudojimas

#### Vietinės versijos paleidimas

Reikia paleisti serverį ir vartotojo sąsajos aplikaciją.

Tiek _server_, tiek _client_ komandinėse eilutėse įveskite šią komandą:

```
npm start
```
#### Prieiga prie administracinės skilties

Kadangi asmeniniai .env failai su konfidencialia DB informacija GitHub neprieinami ir norint išbandyti programą reikia susikurti savo MongoDB duombazę, registruojant vartotoją ir norint jam suteikti administratoriaus teises, kurti reiktų per Postman naudojantis nurodytais endpointais ir be kitos naujo vartotojo informacijos taip pat nurodyti "role: admin".
