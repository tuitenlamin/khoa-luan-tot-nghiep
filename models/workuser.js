'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorkUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Users}) {
      // define association here
      this.belongsTo(Users, {foreignKey: "UserWorkAccount", as:"userwork"})
    }
  };
  WorkUser.init({
    nameWork: DataTypes.STRING,
    experience: DataTypes.STRING,
    education: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorkUser',
  });
  return WorkUser;
};