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
    },
    fruit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    pizza: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    sandwich: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dessert: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    snacks: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    meat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    baked_goods: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    veggies: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    candy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    cake: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    coldbrew: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    surprise: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    }
  }, {});
  Kitchens.associate = function(models) {
    // associations can be defined here
  };
  return Kitchens;
};