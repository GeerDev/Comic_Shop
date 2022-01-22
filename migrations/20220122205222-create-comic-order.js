'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ComicOrders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ComicId: {
        type: Sequelize.INTEGER,
        references: { model: 'Comics', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      OrderId: {
        type: Sequelize.INTEGER,
        references: { model: 'Orders', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ComicOrders');
  }
};