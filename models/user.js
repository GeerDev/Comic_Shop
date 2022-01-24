'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

    static associate(models) {
      User.hasMany(models.Order);
      User.hasMany(models.Token);
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: {type:DataTypes.STRING,unique: true},
    password: DataTypes.STRING,
    rol: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};