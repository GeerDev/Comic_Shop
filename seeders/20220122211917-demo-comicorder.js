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
      OrderId: '3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '3',
      OrderId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '3',
      OrderId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '3',
      OrderId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '1',
      OrderId: '4',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
