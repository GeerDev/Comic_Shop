'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comic extends Model {

    static associate(models) {
      Comic.belongsToMany(models.Category, { through: 'ComicCategories', as: 'categories', foreignKey: 'ComicId' });
      Comic.belongsToMany(models.Order, { through: 'ComicOrders', as: 'orders', foreignKey: 'ComicId' });
    }
  }
  Comic.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Comic',
  });
  return Comic;
};