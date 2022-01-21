'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comic extends Model {

    static associate(models) {
      Comic.belongsToMany(models.Category, { through: 'ComicCategory' });
      Comic.belongsToMany(models.Order, { through: 'ComicOrder' });
    }
  }
  Comic.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comic',
  });
  return Comic;
};