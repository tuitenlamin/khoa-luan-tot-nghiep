'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('companyTypeWorks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      companyID:{
        type: Sequelize.INTEGER,
        references: {
          model: "Companies",
          key: "id"
        },
        onDelete: "CASCADE"
      },
      typeWorkID:{
        type: Sequelize.INTEGER,
        references: {
          model: "Works",
          key: "id"
        },
        onDelete: "CASCADE"
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
    await queryInterface.dropTable('companyTypeWorks');
  }
};