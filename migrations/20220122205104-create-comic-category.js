'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ComicCategories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ComicId: {
        type: Sequelize.INTEGER,
        references: { model: 'Comics', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      CategoryId: {
        type: Sequelize.INTEGER,
        references: { model: 'Categories', key: 'id'},
        onDelete: 'CASCADE',
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ComicCategories');
  }
};