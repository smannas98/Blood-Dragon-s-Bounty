const { sequelize } = require('../../src/db/models/index');
const { Kitchens } = require('../../src/db/models');

describe('Kitchen', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            done();
        }).catch((err) => {
            console.log(err);
            done();
        });
    });
    describe('#create', () => {
        it('should create a kitchen object with valid attributes', (done) => {
            Kitchens.create({
                name: 'test!',
                building: 1,
                floor: 1,
                fruit: 2,
                pizza: 2,
                sandwich: 2,
                dessert: 2,
                snacks: 2,
                meat: 2,
                baked_goods: 2,
                veggies: 2,
                candy: 2,
                cake: 2,
                coldbrew: true,
                surpise: 0
            }).then((kitchen) => {
                expect(kitchen.name).toBe('test!');
                expect(kitchen.building).toBe(1);
                expect(kitchen.floor).toBe(1);
                expect(kitchen.fruit).toBe(2);
                expect(kitchen.pizza).toBe(2);
                expect(kitchen.sandwich).toBe(2);
                expect(kitchen.dessert).toBe(2);
                expect(kitchen.snacks).toBe(2);
                expect(kitchen.meat).toBe(2);
                expect(kitchen.baked_goods).toBe(2);
                expect(kitchen.veggies).toBe(2);
                expect(kitchen.candy).toBe(2);
                expect(kitchen.cake).toBe(2);
                expect(kitchen.coldbrew).toBe(true);
                expect(kitchen.surprise).toBe(0);
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        });
    });
});