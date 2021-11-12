'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Application extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users,Work}) {
      // define association here
      this.belongsTo(Users, {foreignKey: "userId", as:"appliactionuser"}),
      this.belongsTo(Work, {foreignKey: "jobId"})
    }
  };
  Application.init({
    jobId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Application',
  });
  return Application;
};