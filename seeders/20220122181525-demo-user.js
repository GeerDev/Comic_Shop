'use strict';

const bcrypt = require('bcryptjs');

const arrayHash = ['123456', 'patata', 'jajasaludos', 'fechacumple', 'readme.md']

const passwordHash = arrayHash.map(element => {
    return bcrypt.hashSync( element, 10)
})

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Users', [
      {
      name: 'John',
      email: 'example@example.com',
      password: passwordHash[0],
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Amparo',
      email: 'amparo@example.com',
      password: passwordHash[1],
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Sofia',
      email: 'sofia@example.com',
      password: passwordHash[2],
      rol:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ger',
      email: 'ger@example.com',
      password: passwordHash[3],
      rol:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Ivan',
      email: 'ivan@example.com',
      password: passwordHash[4],
      rol:'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
