const request = require('request');
const server = require('../../src/server');
const { sequelize } = require('../../src/db/models');
const { Kitchens } = require('../../src/db/models');

const base = "http://localhost:4000";

describe('routes : landing', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            Kitchens.create({
                id: 1,
                name: "test",
                floor: 1,
                building: 2
            }).then((kitchen) => {
                this.kitchen = kitchen;
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        }).catch((err) => {
            console.log(err);
            done();
        });
    });
    describe('GET /', () => {
        it('should return an array of kitchen objects', (done) => {
            request.get(`${base}`, (err, res, body) => {
                const _body = JSON.parse(body);
                expect(err).toBeNull();
                expect(_body.id).toBe(this.kitchen.id);
                expect(_body.name).toBe(this.kitchen.name);
                expect(_body.floor).toBe(this.kitchen.floor);
                expect(_body.building).toBe(this.kitchen.building);
                done();
            });
        });
    });
});