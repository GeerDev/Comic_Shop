'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'ComicOrders', [
    {
      ComicId: '1',
      OrderId: '5',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '2',
      OrderId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '3',
      OrderId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
