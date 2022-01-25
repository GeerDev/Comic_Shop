'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Reviews', [
      {
      title: 'Primera review',
      content: 'Detalles de la primera review',
      UserId: 3,
      ComicId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Segunda review',
      content: 'Detalles de la segunda review',
      UserId: 3,
      ComicId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Tercera review',
      content: 'Detalles de la tercera review',
      UserId: 1,
      ComicId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Cuarta review',
      content: 'Detalles de la cuarta review',
      UserId: 2,
      ComicId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Quinta review',
      content: 'Detalles de la quinta review',
      UserId: 3,
      ComicId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Sexta review',
      content: 'Detalles de la sexta review',
      UserId: 1,
      ComicId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {

  }
};
