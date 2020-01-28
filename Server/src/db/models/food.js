'use strict';
module.exports = (sequelize, DataTypes) => {
  var Food = sequelize.define('Food', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Food.associate = function(models) {
    // associations can be defined here
    Food.hasMany(models.Foodstores, {
      foreignKey: "foodId",
      as: "Foodstores"
    });
  };
  return Food;
};