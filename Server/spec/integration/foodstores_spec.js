const request = require('request');
const server = require('../../src/server');
const { sequelize } = require('../../src/db/models');
const { Foodstores } = require('../../src/db/models');
const { Food } = require('../../src/db/models');
const { Kitchens } = require('../../src/db/models');

const base = "http://localhost:4000";

describe('routes : kitchenView', () => {
    beforeEach((done) => {
        sequelize.sync({ force: true }).then(() => {
            Kitchens.create({
                id: 1,
                name: "test",
                floor: 2,
                building: 1
            }).then((kitchen) => {
                this.kitchen = kitchen;
                Food.create({
                    id: 2,
                    name: "pizza"
                }).then((_food) => {
                    this._food = _food;
                    Foodstores.create({
                        kitchenId: 1,
                        foodId: 2,
                        quantity: 1
                    }).then((foodstore) => {
                        this.foodstore = foodstore;
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
            done();
        }).catch((err) => {
            console.log(err);
            done();
        });
    });
    // describe('GET /:id', () => {
    //     it('should return all reference to kitchen from foodstores table, as well as all food objects', (done) => {
    //         request.get(`${base}/1`, (err, res, body) => {

    //         })
    //     });
    // })
});