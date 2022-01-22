'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Users', [
      {
      name: 'John',
      email: 'example@example.com',
      password:'123456',
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Amparo',
      email: 'amparo@example.com',
      password:'123456',
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sofia',
      email: 'sofia@example.com',
      password:'123456',
      rol:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ger',
      email: 'ger@example.com',
      password:'123456',
      rol:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ivan',
      email: 'ivan@example.com',
      password:'123456',
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
