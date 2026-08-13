import { describe, it, expect } from 'vitest';
import { Block } from '../../src/blockchain/block.js';

describe('Mining', () => {
  it('should mine a block with correct difficulty', () => {
    const block = new Block(1, Date.now(), [{ a: 1 }], '0');

    block.mineBlock(2);

    expect(block.hash.startsWith('00')).toBe(true);
    expect(block.nonce).toBeGreaterThan(0);
  });
});
