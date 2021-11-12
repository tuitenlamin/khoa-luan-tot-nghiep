'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
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
        defaultValue: "UNGVIEN",
      },
      avatar: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      sex: {
        type: Sequelize.STRING,
        defaultValue: "nam",
      },
      birthday: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      nation: {
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
      Certificate: {
        type: Sequelize.STRING
      },
      careerGoals: {
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
    await queryInterface.dropTable('Users');
  }
};