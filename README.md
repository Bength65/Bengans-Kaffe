# Bengans Kaffe ☕️

Ett utbildningsprojekt som demonstrerar en enkel blockchain för kaffetransaktioner.  
Byggt med Node.js, Express, MongoDB och Mongoose.

---

## TDD-bevis (test först → kod sen)

1. **RED commit:**  
   https://github.com/<ditt-namn>/Bengans-Kaffe/commit/96021fdaeb5d6e9c5bada6fd5158791019742579

2. **GREEN commit:**  
   https://github.com/<ditt-namn>/Bengans-Kaffe/commit/5fb17779ff3dd4873adf89e5bfb45a786e0ab85e

3. **RED commit (mining):**  
   https://github.com/<ditt-namn>/Bengans-Kaffe/commit/04252c66b0a5b57535233bcb5f2dc6f945202845

4. **GREEN commit (mining):**  
   https://github.com/<ditt-namn>/Bengans-Kaffe/commit/4e66664f718534ae2f6720b8935d12993f513808

<img width="1412" height="798" alt="Skärmbild 2026-08-18 170337" src="https://github.com/user-attachments/assets/d035e545-06c2-44a8-bec3-54ce91e47b2c" />
<img width="1413" height="799" alt="Skärmbild 2026-08-18 170430" src="https://github.com/user-attachments/assets/967ae16c-17d6-423b-94a9-a2a54d7668d0" />
<img width="1414" height="799" alt="Skärmbild 2026-08-18 170441" src="https://github.com/user-attachments/assets/1e659259-5a58-4927-acb7-0d650852c918" />

⚙️ Installation och körning:
git clone https://github.com/Bength65/Bengans-Kaffe.git
cd Bengans-Kaffe

Installera beroenden:
npm install

Skapa .env‑fil:
MONGO_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/coffeechain?retryWrites=true&w=majority
PORT=3000

Starta servern:
npm run dev

Du ska se:
✅ MongoDB ansluten
Server körs på port 3000
Difficulty: 3

🔗 API‑endpoints:
Metod Endpoint Beskrivning
GET /blockchain Hämtar hela kedjan och validerar den
POST /transactions Lägger till en ny transaktion i kön
POST /mine Minerar ett nytt block och sparar det i databasen
GET /pending Visar alla väntande transaktioner
POST /reset (endast testläge) Återställer kedjan till genesis‑block

🧠 Teknisk struktur
src/blockchain/block.js – definierar enskilda block och hash‑beräkning

src/blockchain/blockchain.js – hanterar kedjan, mining och databas‑synk

src/models/BlockModel.js – Mongoose‑schema för block

src/server.js – Express‑server med API‑routes

public/ – frontend med formulär och visning av kedjan

🧪 Testdriven utveckling (TDD)
Projektet följer principen “test först → kod sen”.
Varje funktion implementerades genom att först skapa ett misslyckat test (RED) och sedan skriva kod som gör testet grönt (GREEN).
Se commit‑länkarna ovan för bevis på processen.

☕️ Framtida förbättringar
Lägga till användarautentisering för transaktionssignering

Visualisera blockkedjan grafiskt i frontend

Implementera smarta kontrakt för automatiska verifieringar

Exportera blockdata till CSV eller JSON för analys

👤 Skapad av
Bengt Hafström  
Utvecklare och arkitekt (student)
📍 Västra Götaland, Sverige
