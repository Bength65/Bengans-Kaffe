import request from 'supertest';
import { describe, it, expect } from 'vitest';
import { app } from '../../src/server.js';

describe('API', () => {
  it('GET /blockchain returns array', async () => {
    const res = await request(app).get('/blockchain');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.chain)).toBe(true);
  });
});
