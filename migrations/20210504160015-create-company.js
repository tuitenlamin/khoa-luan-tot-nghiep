'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      account: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: "NHATUYENDUNG",
      },
      typeCompanyWork: {
        type: Sequelize.INTEGER,
        references: {
          model: "typeworks",
          key: "id",
        },
      },
      address: {
        type: Sequelize.STRING
      },
      nation: {
        type: Sequelize.STRING
      },
      webstie: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      numberPhone: {
        type: Sequelize.STRING
      },
      DateTime: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Companies');
  }
};