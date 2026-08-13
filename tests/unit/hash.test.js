import { describe, it, expect } from 'vitest';
import { calculateHash } from '../../src/blockchain/hash.js';

describe('Hashing', () => {
  it('should generate a SHA-256 hash string', () => {
    const result = calculateHash('hello');
    expect(result).toBeTypeOf('string');
    expect(result.length).toBe(64); // SHA-256 length
  });
});
