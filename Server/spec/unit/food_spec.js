const { sequelize } = require('../../src/db/models');
const { Food } = require('../../src/db/models');

describe('Food', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            done();
        }).catch((err) => {
            console.log(err);
            done();
        });
    });
    describe('#create', () => {
        it('should create a new food object', (done) => {
            Food.create({
                name: "pizza"
            }).then((_food) => {
                expect(_food.name).toBe('pizza');
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        });
    });
});