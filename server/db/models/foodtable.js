"use strict";
module.exports = (sequelize, DataTypes) => {
  const foodTable = sequelize.define(
    "foodTable",
    {
      quantity: DataTypes.STRING,
      foodID: DataTypes.INTEGER,
      kitchenID: DataTypes.INTEGER
    },
    {}
  );
  foodTable.associate = function(models) {
    // associations can be defined here
    foodTable.belongsTo(models.kitchen, {
      foreignKey: "kitchenID",
      onDelete: "CASCADE"
    });
    foodTable.belongsTo(models.food, {
      foreignKey: "foodID",
      onDelete: "CASCADE"
    });
  };

  return foodTable;
};
