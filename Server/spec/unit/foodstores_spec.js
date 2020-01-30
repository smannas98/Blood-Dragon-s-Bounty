const { sequelize } = require('../../src/db/models');
const { Foodstores } = require('../../src/db/models');
const { Kitchens } = require('../../src/db/models');
const { Food } = require('../../src/db/models');

describe('Foodstores', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true })
        .then(() => {
            Kitchens.create({
                id: 1,
                name: "kitchen1",
                floor: 1,
                building: 1
            }).then((kitchen) => {
                this.kitchen = kitchen;
                Food.create({
                    id: 1,
                    name: "pizza"
                }).then((_food) => {
                    this._food = _food;
                    done();
                }).catch((err) => {
                    console.log(err);
                    done();
                });
            }).catch((err) => {
                console.log(err);
                done();
            });
        }).catch((err) => {
            console.log(err);
            done();
        });
    });
    describe('#create', () => {
        it('should create a foodstore object', (done) => {
            Foodstores.create({
                kitchenId: this.kitchen.id,
                foodId: this._food.id,
                quantity: 2
            }).then((foodstore) => {
                expect(foodstore.kitchenId).toBe(1);
                expect(foodstore.foodId).toBe(1);
                expect(foodstore.quantity).toBe(2);
                done();
            }).catch((err) => {
                console.log(err);
                done();
            });
        });
    });
});