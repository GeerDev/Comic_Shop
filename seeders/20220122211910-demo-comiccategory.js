'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'ComicCategories', [
    {
      ComicId: '1',
      CategoryId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '2',
      CategoryId: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ComicId: '3',
      CategoryId: '2',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
