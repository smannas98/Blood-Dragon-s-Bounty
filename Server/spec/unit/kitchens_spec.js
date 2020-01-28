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
                name: "test",
                floor: 1,
                building: 2
            }).then((kitchen) => {
                expect(kitchen.name).toBe('test');
                expect(kitchen.floor).toBe(1);
                expect(kitchen.building).toBe(2);
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        });
    });
});