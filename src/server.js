import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { Blockchain } from './blockchain/blockchain.js';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB ansluten'))
  .catch(err => console.error('❌ MongoDB fel:', err));

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const blockchain = new Blockchain();

// 🟩 Init-funktion för att kunna använda await
async function init() {
  await blockchain.loadChainFromDB();   // 🟩 Rätt plats

  // GET /blockchain
  app.get('/blockchain', (req, res) => {
    res.json({
      chain: blockchain.chain,
      pendingTransactions: blockchain.pendingTransactions,
      length: blockchain.chain.length,
      isValid: blockchain.isChainValid(),
    });
  });

  // POST /transactions
  app.post('/transactions', (req, res) => {
    try {
      blockchain.addTransaction(req.body);
      res.status(201).json({
        message: 'Transaktion tillagd',
        pendingCount: blockchain.pendingTransactions.length,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // POST /mine
  app.post('/mine', async (req, res) => {
    try {
      const block = await blockchain.minePendingTransactions();
      res.status(201).json({
        message: 'Block minerat',
        block,
      });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // GET /pending
  app.get('/pending', (req, res) => {
    res.json(blockchain.pendingTransactions);
  });

  const PORT = process.env.PORT || 3000;

  if (process.env.NODE_ENV !== 'test') {
    app.listen(PORT, () => {
      console.log(`Server körs på port ${PORT}`);
      console.log(`Difficulty: ${blockchain.difficulty}`);
    });
  }
}

init(); // 🟩 Starta init
