import express from 'express';
import { Blockchain } from './blockchain/blockchain.js';

const app = express();
app.use(express.json());

const blockchain = new Blockchain();

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
app.post('/mine', (req, res) => {
  try {
    const block = blockchain.minePendingTransactions();
    res.status(201).json({
      message: 'Block minerat',
      block,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Endast för testmiljö
if (process.env.NODE_ENV === 'test') {
  app.post('/reset', (req, res) => {
    blockchain.reset();
    res.json({ message: 'Blockchain återställd' });
  });
}

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server körs på port ${PORT}`);
    console.log(`Difficulty: ${blockchain.difficulty}`);
  });
}

export { app };
