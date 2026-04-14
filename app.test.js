const request = require('supertest');
const app = require('./app');

describe('Pruebas de la aplicación web', () => {
    it('Debe responder con un estado 200 en la ruta principal', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
    });
});