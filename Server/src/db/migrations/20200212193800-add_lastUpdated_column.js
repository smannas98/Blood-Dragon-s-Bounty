'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Kitchens', 'lastUpdatedAt', {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Date.now(),
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Kitchens', 'lastUpdatedAt');
  },
};
