const request = require('request');
const { Kitchens } = require('../../src/db/models');
const server = require('../../src/server');
const { sequelize } = require('../../src/db/models/index');

const base = 'http://localhost:4000';

describe('routes : kitchens', () => {
    const currentDate = new Date();
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            Kitchens.create({
                id: 2,
                name: "test kitchen",
                floor: 1,
                building: 1,
                fruit: 1,
                pizza: 2,
                sandwich: 0,
                dessert: 1,
                snacks: 2,
                meat: 1,
                baked_goods: 2,
                veggies: 0,
                candy: 2,
                cake: 1,
                coldbrew: true,
                surprise: 0
            }).then((kitchen) => {
                this.kitchen = kitchen;
                done();
            }).catch((err) => {
                console.log("kitchen object failed to create" + err);
                done();
            });
        }).catch((err) => {
            console.log("sequelize sync failed" + err);
            done();
        });
    });
    describe('GET /', () => {
        it('should return a list of kitchens', (done) => {
            request.get(`${base}`, (err, res, body) => {
                let _body = JSON.parse(body);
                expect(err).toBeNull();
                expect(_body.id).toBe(2);
                expect(_body.name).toBe('test kitchen');
                expect(_body.floor).toBe(1);
                expect(_body.building).toBe(1);
                expect(_body.fruit).toBe(1);
                expect(_body.pizza).toBe(2);
                expect(_body.sandwich).toBe(0);
                expect(_body.dessert).toBe(1);
                expect(_body.snacks).toBe(2);
                expect(_body.meat).toBe(1);
                expect(_body.baked_goods).toBe(2);
                expect(_body.veggies).toBe(0);
                expect(_body.candy).toBe(2);
                expect(_body.cake).toBe(1);
                expect(_body.coldbrew).toBe(true);
                expect(_body.surprise).toBe(0);
                done();
            });
        });
    });
    describe('GET /:id', () => {
        it('should return the specified kitchen object', (done) => {
            Kitchens.create({
                id: 3,
                name: "test kitchen numero dos",
                floor: 2,
                building: 3,
                fruit: 1,
                pizza: 2,
                sandwich: 0,
                dessert: 1,
                snacks: 2,
                meat: 1,
                baked_goods: 2,
                veggies: 0,
                candy: 2,
                cake: 1,
                coldbrew: false,
                surprise: 0
            }).then((_kitchen) => {
                this._kitchen = _kitchen;
                request.get(`${base}/3`, (err, res, body) => {
                    let _body = JSON.parse(body);
                    expect(_body.id).toBe(3);
                    expect(_body.coldbrew).toBe(false);
                    done();
                });
            });
        });
    });
});