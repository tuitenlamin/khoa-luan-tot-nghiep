'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FileCV extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsTo(Users, {foreignKey: "UserFileCV", as:"CvFileUser"})
    }
  };
  FileCV.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    numberPhone: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    experience: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    nation: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    skill: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    foreiginLanguage: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    education: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    sex: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    careerGoals: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    DateofBirth: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    Certificate: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    avatar: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'FileCV',
  });
  return FileCV;
};