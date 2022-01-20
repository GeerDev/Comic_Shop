'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
 
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    details: DataTypes.STRING,
    status: DataTypes.STRING,
    delivery: DataTypes.DATE,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};