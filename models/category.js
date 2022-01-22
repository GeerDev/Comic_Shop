'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {

    static associate(models) {
      Category.belongsToMany(models.Comic, { through: 'ComicCategories', as: 'comics', foreignKey: 'CategoryId' });
    }
  }
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};