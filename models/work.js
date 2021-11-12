'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Company,Users,TypeWork}) {
      // define association here
    
      // this.belongsTo(Users, {foreignKey: "UserWorkAccount", as:"userwork"})
      // this.belongsTo(Application, {foreignKey: "jobId", as:"appwork"})
      this.belongsTo(Company, {foreignKey: "companyFrom", as:"fromcompany"})
      this.belongsToMany(Users, {foreignKey: "jobId", as:"userapply", through: 'Applications'})
      this.belongsTo(TypeWork, {foreignKey: "typeWorkPost", as:"worktype"})
    }
  };
  Work.init({
    nameWork: {
      type:DataTypes.STRING,
      allowNull: {
        msg: 'Please enter your nameWork'
      },
      validate: {
        notEmpty: true,
      },
    },
    experience: {
      type:DataTypes.STRING,
      allowNull: {
        msg: 'Please enter your nameWork'
      },
      validate: {
        notEmpty: true,
      },
    },
    levelWork:{
      type: DataTypes.STRING
    },
    education: {
      type:DataTypes.STRING,
      allowNull: {
        msg: 'Please enter your nameWork'
      },
      validate: {
        notEmpty: true,
      },
    },
    description:{
      type: DataTypes.STRING,
      allowNull: {
        msg: 'Please enter your nameWork'
      },
      validate: {
        notEmpty: true,
      },
    },
    request: {
      type:DataTypes.STRING,
      allowNull: {
        msg: 'Please enter your nameWork'
      },
      validate: {
        notEmpty: true,
      },
    },
    salary:{
      type: DataTypes.NUMBER,
      allowNull: {
        msg: 'Please enter your nameWork'
      },
      validate: {
        notEmpty: true,
      },
    },
    addr:{
      type: DataTypes.NUMBER,
      allowNull: {
        msg: 'Please enter your nameWork'
      },
      validate: {
        notEmpty: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Work',
  });
  return Work;
};