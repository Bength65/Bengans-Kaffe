import { calculateHash } from './hash.js';

export function mineBlock(block, difficulty) {
  const target = '0'.repeat(difficulty);

  while (!block.hash.startsWith(target)) {
    block.nonce++;
    block.hash = block.calculateHash();
  }

  return block;
}