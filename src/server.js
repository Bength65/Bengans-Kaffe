import express from 'express';
import { Blockchain } from './blockchain/blockchain.js';

const app = express();
app.use(express.json());

const chain = new Blockchain();

app.get('/blockchain', (req, res) => {
  res.json(chain.chain);
});

app.post('/transactions', (req, res) => {
  chain.addTransaction(req.body);
  res.json({ message: 'Transaction added' });
});

app.post('/mine', (req, res) => {
  const block = chain.minePending();
  res.json(block);
});

app.listen(3000, () => console.log('Server running on port 3000'));
