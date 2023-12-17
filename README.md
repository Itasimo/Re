# RegistroElettronicoAxiosAPI

Questa repository è un API progettata per il registro elettronico Axios.

## Come funziona

In un file `.js` importare l'API

```javascript
const RegistroElettronicoAxiosAPI = require('./RegistroElettronicoAxiosAPI/axios');
```

Per fare una chiamata all'API registro chiamare la funzione

```javascript
(async function () {
	let data = await RegistroElettronicoAxiosAPI(CodiceFiscale, CodiceUtente, Password, Azione)
})();
```

L' API risponde con un JSON contenete le informazioni

| Parametro               | Spiegazione                 | Necessario per login |
| ----------------------- | --------------------------- | :------------------: |
| **CodiceFiscale** | Codice Fiscale della scuola |         ✔️         |
| **CodiceUtente**  | Codice Utente dell' utente  |         ✔️         |
| **Password**      | Password dell' utente       |         ✔️         |
| **Azione**        | Password dell' utente       |          ❌          |

- **Voti**:
  - La risposta contiene tutti i voti pubblicati fino al momento della chiamata;
  - Risponde con informazioni riguardanti:
    - Materia
    - Tipo di voto
    - Voto
    - Data
    - Eventuali commenti
    - Professore
- **Compiti**:
  - La risposta contiene tutti i compiti pubblicati fino al momento della chiamata;
  - Risponde con informazioni riguardanti:
    - Materia
    - Data di consegna
    - Compito
    - Professore

## Aggiornamenti

- **23/11/23**: Upload dei file del progetto (Tutto in Puppeteer)
- **17/11/23**: Implementazione dell'API del registo (Ancora dipendente da Puppeteer per ricavare l'ID della sessione)

## TODO

* [X] Creare un API con le funzionalità base del registro (Compiti, Voti, Verifiche)
* [ ] Aggiungere altre funzionalità al registro (Comunicazioni, Assenze, Pagella, ecc...)
* [X] Rimovere moduli ES6
* [X] Implementare l'API di Axios per ricavare i dati per le funzionalità base
* [ ] Rimovere completamente Puppeteer dall'API
