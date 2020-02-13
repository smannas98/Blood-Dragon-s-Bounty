'use strict';
module.exports = (sequelize, DataTypes) => {
  const TransactionHistory = sequelize.define(
    'TransactionHistory',
    {
      kitchenId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      foodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  TransactionHistory.associate = function(models) {
    // associations can be defined here
  };
  return TransactionHistory;
};
