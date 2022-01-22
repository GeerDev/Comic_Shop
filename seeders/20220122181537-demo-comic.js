'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Comics', [
      {
      name: 'Comic 1',
      description: 'Descripcion del comic número 1',
      image:'Imagen 1',
      price: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 2',
      description: 'Descripcion del comic número 2',
      image:'Imagen 2',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 3',
      description: 'Descripcion del comic número 3',
      image:'Imagen 3',
      price: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 4',
      description: 'Descripcion del comic número 4',
      image:'Imagen 4',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 5',
      description: 'Descripcion del comic número 5',
      image:'Imagen 5',
      price: 2000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
