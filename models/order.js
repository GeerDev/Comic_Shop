'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
 
    static associate(models) {
      Order.belongsTo(models.User);
      Order.belongsToMany(models.Comic, { through: 'ComicOrders', as: 'comics', foreignKey: 'OrderId' });
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