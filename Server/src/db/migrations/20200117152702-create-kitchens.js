'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Kitchens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      floor: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      building: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fruit: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      pizza: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      sandwich: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      dessert: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      snacks: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      meat: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      baked_goods: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      veggies: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      candy: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      cake: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      coldbrew: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      surprise: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Kitchens');
  }
};