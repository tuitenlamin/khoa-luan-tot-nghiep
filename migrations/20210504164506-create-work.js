'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Works', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyFrom:{
        type: Sequelize.INTEGER,
        references: {
          model: "companies",
          key: "id",
        },
      },
      typeWorkPost: {
        type: Sequelize.INTEGER,
        references: {
          model: "typeworks",
          key: "id",
        },
      },
      levelWork:{
        type: Sequelize.STRING
      },
      nameWork: {
        type: Sequelize.STRING,
      },
      experience: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      request: {
        type: Sequelize.STRING
      },
      salary: {
        type: Sequelize.INTEGER
      },
      addr: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Works');
  }
};