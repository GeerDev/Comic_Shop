'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Comics', [
      {
      name: 'Comic 1',
      description: 'Descripcion del comic número 1',
      image:'',
      price: 20,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 2',
      description: 'Descripcion del comic número 2',
      image:'',
      price: 10,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 3',
      description: 'Descripcion del comic número 3',
      image:'',
      price: 35,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 4',
      description: 'Descripcion del comic número 4',
      image:'',
      price: 10.7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Comic 5',
      description: 'Descripcion del comic número 5',
      image:'',
      price: 2000,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
