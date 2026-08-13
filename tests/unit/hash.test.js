import { describe, it, expect } from 'vitest';
import { sha256 } from '../../src/blockchain/hash.js';

describe('Hashing', () => {
  it('should generate a SHA-256 hash string', () => {
    const result = sha256('hello');
    expect(result).toBeTypeOf('string');
    expect(result.length).toBe(64); // SHA-256 length
  });
});
