const request = require('supertest');
const app = require('../server');

describe('POST /api/contact', () => {
  it('devrait renvoyer 400 si les champs sont manquants', async () => {
    const res = await request(app).post('/api/contact').send({});
    expect(res.statusCode).toBe(400);
    expect(res.body.message).toBe('Champs obligatoires manquants.');
  });
});