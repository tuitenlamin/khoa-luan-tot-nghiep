'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Work,TypeWork,Users}) {
      this.hasMany(Work, {foreignKey: "companyFrom", as:"fromcompany"})
      this.belongsTo(TypeWork, {foreignKey: "typeCompanyWork", as:"workType"})

    }
  };
  Company.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },account: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [2,30],
      },
    },
    type: DataTypes.STRING,
    password: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type:DataTypes.STRING,
      allowNull: false,
      
    },
    nation: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    webstie: {
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
    avatar: DataTypes.STRING,
    numberPhone: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Company',
  });
  return Company;
};