'use strict';
module.exports = (sequelize, DataTypes) => {
  var Kitchens = sequelize.define('Kitchens', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    building: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Kitchens.associate = function(models) {
    // associations can be defined here
    Kitchens.hasMany(models.Foodstores, {
      foreignKey: "kitchenId",
      as: "Foodstores"
    });
  };
  return Kitchens;
};