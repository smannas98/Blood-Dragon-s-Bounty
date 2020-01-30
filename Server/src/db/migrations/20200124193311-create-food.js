'use strict'
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Food', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            name: {
                type: Sequelize.STRING,
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
        return queryInterface.dropTable('Food')
    },
}
