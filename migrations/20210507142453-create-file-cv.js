'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('FileCVs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserFileCV:{
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      },
      name: {
        type: Sequelize.STRING
      },
      numberPhone: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      nation: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      avatar: {
        type: Sequelize.STRING
      },
      skill: {
        type: Sequelize.STRING
      },
      foreiginLanguage: {
        type: Sequelize.STRING
      },
      education: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING
      },
      careerGoals: {
        type: Sequelize.STRING
      },
      DateofBirth: {
        type: Sequelize.STRING
      },
      Certificate: {
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
    await queryInterface.dropTable('FileCVs');
  }
};