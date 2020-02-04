'use strict';
module.exports = (sequelize, DataTypes) => {
  var Foodstores = sequelize.define(
    'Foodstores',
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
  Foodstores.associate = function(models) {
    // associations can be defined here
    Foodstores.belongsTo(models.Kitchens, {
      foreignKey: 'kitchenId',
      onDelete: 'CASCADE',
    });
    Foodstores.belongsTo(models.Food, {
      foreignKey: 'foodId',
      onDelete: 'CASCADE',
    });
  };
  return Foodstores;
};
