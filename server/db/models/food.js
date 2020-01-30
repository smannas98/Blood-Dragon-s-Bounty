"use strict";
module.exports = (sequelize, DataTypes) => {
  const food = sequelize.define(
    "food",
    {
      name: DataTypes.STRING
    },
    {}
  );
  food.associate = function(models) {
    food.hasMany(models.foodTable, {
      foreignKey: "foodID",
      as: "foodTable"
    });
  };

  return food;
};
