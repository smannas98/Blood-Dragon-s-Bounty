"use strict";
module.exports = (sequelize, DataTypes) => {
  const kitchen = sequelize.define(
    "kitchen",
    {
      kitchenName: DataTypes.STRING,
      floor: DataTypes.STRING
    },
    {}
  );
  kitchen.associate = function(models) {
    kitchen.hasMany(models.foodTable, {
      foreignKey: "kitchenID",
      as: "foodTable"
    });
  };
  return kitchen;
};
