'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
          // this.hasMany(Company,{foreignKey:"titleWorkID"})

    static associate({Company,Work}) {
      // define association here
      this.hasMany(Company, {foreignKey: "typeCompanyWork", as:"workType"})
      this.hasMany(Work, {foreignKey: "typeWorkPost", as:"worktype"})
    }
  };
  TypeWork.init({
    titleWork: {
      type:DataTypes.STRING,
    },
    addressWork:{
      type:DataTypes.STRING,
    },
    levelWork:{
      type:DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'TypeWork',
  });
  return TypeWork;
};