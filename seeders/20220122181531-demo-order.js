'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert( 'Orders', [
      {
      details: 'Detalles del primer pedido',
      status: 'Entregado',
      delivery:'2022-05-03',
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      details: 'Detalles del segundo pedido',
      status: 'Entregado',
      delivery:'2020-05-03',
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      details: 'Detalles del tercer pedido',
      status: 'Entregado',
      delivery:'2019-12-03',
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      details: 'Detalles del cuarto pedido',
      status: 'Pendiente',
      delivery:'2022-05-22',
      UserId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      details: 'Detalles del quinto pedido',
      status: 'Pendiente',
      delivery:'2021-09-11',
      UserId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down (queryInterface, Sequelize) {
  }
};
