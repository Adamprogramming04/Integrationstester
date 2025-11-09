# Del 3 – Integrationstester för Fake Store API

Detta projekt innehåller integrationstester för [Fake Store API](https://fakestoreapi.com/) som en del av en testningsuppgift.

## 📋 Innehåll

- **G-nivå:** Grundläggande integrationstester
- **VG-nivå:** Utökade tester med validering av API-svar

---


## 🚀 Kom igång

### Förutsättningar
- Node.js (version 18.x eller senare)
- npm (kommer med Node.js)
- Git

### Installation och körning

#### Steg 1: Klona repot
```bash
git clone https://github.com/Adamprogramming04/Integrationstester.git
cd Integrationstester
```

#### Steg 2: Installera dependencies
```bash
npm install
```

#### Steg 3: Kör testerna
```bash
npm test
```

---

## 🧪 Testöversikt

### G-nivå tester:
1. **Statuskod 200** - Verifierar att API:et svarar korrekt

### VG-nivå tester:
1. **Antal produkter** - Verifierar att exakt 20 produkter returneras från `/products`
2. **Produktfält** - Validerar att produkter innehåller obligatoriska fält (`title`, `price`, `category`)
3. **Datatyper** - Kontrollerar att fält har korrekta datatyper (string, number)
4. **Specifik produkt** - Validerar exakta värden för produkt med ID 1
5. **Produktstruktur** - Verifierar att alla produkter har alla obligatoriska fält
6. **Rating-struktur** - Kontrollerar att rating-objektet innehåller `rate` och `count`
7. **Felhantering** - Testar svar för ogiltiga produkt-ID
8. **Kategorier** - Validerar att API:et returnerar giltiga produktkategorier
9. **Limit-parameter** - Testar att `?limit=5` returnerar exakt 5 produkter

---

## 📊 Förväntat testresultat

När du kör `npm test` bör du se:
```
PASS  tests/integration.test.js
  Fake Store API - Integration Tests
    G-nivå: Grundläggande tester
      ✓ GET /products returnerar statuskod 200
    VG-nivå: Utökade tester
      ✓ GET /products returnerar förväntat antal produkter (20 st)
      ✓ Produkt innehåller korrekta fält: title, price, category
      ✓ GET /products/1 returnerar korrekt produktdata
      ✓ Alla produkter innehåller obligatoriska fält
      ✓ Produktens rating innehåller rate och count
      ✓ GET /products/999 returnerar 404 eller tomt objekt
      ✓ GET /products/categories returnerar giltiga kategorier
      ✓ GET /products?limit=5 returnerar exakt 5 produkter

Test Suites: 1 passed, 1 total
Tests:       9 passed, 9 total
Snapshots:   0 total
Time:        X.XXXs
```

---

## 🔄 CI/CD med GitHub Actions

Projektet använder **GitHub Actions** för automatisk testning vid varje push.

### Workflow-funktioner:
- **Trigger:** Automatisk körning vid push eller pull request till `main`/`master`
- **Miljö:** Ubuntu Latest
- **Node-versioner:** Testas på både 18.x och 20.x
- **Steg:**
  1. Checkar ut koden från repot
  2. Sätter upp Node.js-miljön
  3. Installerar alla dependencies
  4. Kör alla integrationstester
  5. Laddar upp coverage-rapporter

### Visa testresultat:
Gå till fliken [**Actions**](https://github.com/Adamprogramming04/Integrationstester/actions) i GitHub-repot för att se testresultat från varje commit.

---

## 📁 Projektstruktur
```
Integrationstester/
├── .github/
│   └── workflows/
│       └── tests.yml          # GitHub Actions workflow-konfiguration
├── tests/
│   └── integration.test.js    # Alla integrationstester (G + VG)
├── .gitignore                 # Filer som ska ignoreras av Git
├── package.json               # Projektberoenden och npm-scripts
└── README.md                  # Dokumentation (denna fil)
```

---

## 🛠️ Teknologier

- **[Jest](https://jestjs.io/)** - Testramverk för JavaScript
- **[Axios](https://axios-http.com/)** - HTTP-klient för API-anrop
- **[GitHub Actions](https://github.com/features/actions)** - CI/CD pipeline
- **[Node.js](https://nodejs.org/)** - JavaScript runtime-miljö

---

## 📝 Testat API

Alla tester använder [Fake Store API](https://fakestoreapi.com/)

### Endpoints som testas:
- `GET /products` - Hämtar alla produkter (20 st)
- `GET /products/:id` - Hämtar en specifik produkt via ID
- `GET /products/categories` - Hämtar alla tillgängliga kategorier
- `GET /products?limit=5` - Hämtar begränsat antal produkter

### Exempel på produktdata:
```json
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "category": "men's clothing",
  "description": "Your perfect pack...",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}
```

---

## 📌 Viktiga noteringar

- ✅ Repository är **PUBLIC** (inte private)
- ✅ Alla tester passerar automatiskt via GitHub Actions
- ✅ Testerna körs på flera Node.js-versioner (18.x och 20.x)
- ✅ Uppfyller samtliga krav för både **G-nivå** och **VG-nivå**
- ✅ Innehåller omfattande testning med 9 test cases

---

## 👤 Författare

**Adam**
- GitHub: [@Adamprogramming04](https://github.com/Adamprogramming04)
- Repository: [Integrationstester](https://github.com/Adamprogramming04/Integrationstester)

---

## 📅 Projekt information

- **Skapad:** November 2025
- **Kurs:** Del 3 – Integrationstester
- **Status:** ✅ Färdig och testad

---

## 🔗 Användbara länkar

- [Fake Store API Dokumentation](https://fakestoreapi.com/docs)
- [Jest Dokumentation](https://jestjs.io/docs/getting-started)
- [Axios Dokumentation](https://axios-http.com/docs/intro)
- [GitHub Actions Dokumentation](https://docs.github.com/en/actions)

---

## ❓ Frågor eller problem?

Om testerna inte fungerar, kontrollera att:
1. Du har Node.js version 18.x eller senare installerat
2. Du har kört `npm install` innan `npm test`
3. Du har internetanslutning (testerna anropar ett externt API)

---
