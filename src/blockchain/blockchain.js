import { Block } from './block.js';
import { DIFFICULTY } from './config.js';

export class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
    this.difficulty = DIFFICULTY;
  }

  createGenesisBlock() {
    return new Block(0, Date.now(), [], '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addTransaction(transaction) {
    const { sender, recipient, batchId, weightKg } = transaction;
    if (!sender || !recipient || !batchId || weightKg == null) {
      throw new Error('Ogiltig transaktion: saknar obligatoriska fält');
    }
    if (typeof weightKg !== 'number' || weightKg <= 0) {
      throw new Error('weightKg måste vara ett positivt tal');
    }
    this.pendingTransactions.push({ sender, recipient, batchId, weightKg });
  }

  minePendingTransactions() {
    if (this.pendingTransactions.length === 0) {
      throw new Error('Inga väntande transaktioner att mine:a');
    }

    const block = new Block(
      this.chain.length,
      Date.now(),
      [...this.pendingTransactions],
      this.getLatestBlock().hash
    );

    block.mineBlock(this.difficulty);
    this.chain.push(block);
    this.pendingTransactions = [];
    return block;
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const current = this.chain[i];
      const previous = this.chain[i - 1];

      if (current.hash !== current.calculateHash()) return false;
      if (current.previousHash !== previous.hash) return false;
      if (!current.hash.startsWith('0'.repeat(this.difficulty))) return false;
    }
    return true;
  }

  reset() {
    this.chain = [this.createGenesisBlock()];
    this.pendingTransactions = [];
  }
}
