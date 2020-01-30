'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Foodstores', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            kitchenId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            foodId: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE,
                defaultValue: Date.now(),
            },
            updatedAt: {
                type: Sequelize.DATE,
                defaultValue: Date.now(),
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Foodstores')
    },
}
