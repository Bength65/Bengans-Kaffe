import { describe, it, expect } from 'vitest';
import { mineBlock } from '../../src/blockchain/mine.js';

describe('Mining', () => {
  it('should find a hash starting with difficulty zeros', () => {
    const block = {
      index: 1,
      previousHash: 'abc',
      transactions: [],
      nonce: 0
    };

    const mined = mineBlock(block, 1); // difficulty = 1 in test
    expect(mined.hash.startsWith('0')).toBe(true);
  });
});
