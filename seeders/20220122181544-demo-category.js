'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Categories', [
      {
      name: 'Category 1',
      description: 'Esta es la categoría 1',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Category 2',
      description: 'Esta es la categoria 2',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
