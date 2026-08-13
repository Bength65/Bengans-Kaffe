import { calculateHash } from './hash.js';

export function mineBlock(block, difficulty) {
  let nonce = 0;
  let hash = '';

  const prefix = '0'.repeat(difficulty);

  while (!hash.startsWith(prefix)) {
    nonce++;
    hash = calculateHash(
      block.index +
      block.previousHash +
      JSON.stringify(block.transactions) +
      nonce
    );
  }

  return { ...block, nonce, hash };
}
