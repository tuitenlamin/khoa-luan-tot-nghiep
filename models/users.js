'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Work, FileCV,Application,WorkUser}) {
      // define association here
      this.hasMany(WorkUser, {foreignKey: "UserWorkAccount", as:"userwork"}),
      // this.hasMany(Work, {foreignKey: "userApply", as:"userapply"}),
      this.hasOne(FileCV, {foreignKey: "UserFileCV", as:"CvFileUser"}),
      this.belongsToMany(Work, {foreignKey: "userId", as:"userapply", through: 'Applications'})
      // this.hasMany(Company, {foreignKey: "UserCompany", as:"userCompany"})
      this.hasMany(Application,{foreignKey: "userId", as:"appliactionuser"})
    }
  };
  Users.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 30],
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
    account: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2,30],
      },
    },
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    type: DataTypes.STRING,
    avatar: DataTypes.STRING,
    phone: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [8,10],
      },
    },
    sex: DataTypes.STRING,
    birthday: DataTypes.STRING,
    experience: {
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
    nation: {
      type:DataTypes.STRING,
      // allowNull: false,
      // validate: {
      //   notEmpty: true,
      // },
    },
    description: {
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
    careerGoals: {
      type:DataTypes.STRING,
    },
    Certificate: {
      type:DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};