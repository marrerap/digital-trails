'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Hiker_Trails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      HikerId: { //fks
        type: Sequelize.INTEGER,
        references: {
          model: "Hikers",
          key: 'id'
        }
      },
      TrailId: { //fks
        type: Sequelize.INTEGER,
        references: {
          model: "Trails",
          key: 'id'
        }
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Hiker_Trails');
  }
};