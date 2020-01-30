"use strict";
module.exports = (sequelize, DataTypes) => {
  const food_Tables = sequelize.define(
    "food_Tables",
    {
      quantity: DataTypes.STRING,
      foodID: DataTypes.INTEGER,
      kitchenID: DataTypes.INTEGER
    },
    {}
  );
  food_Tables.associate = function(models) {
    // associations can be defined here
  };
  return food_Tables;
};
