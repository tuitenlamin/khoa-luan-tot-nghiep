'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class companyTypeWork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  companyTypeWork.init({
    companyID:  {
      type: DataTypes.INTEGER,
      references: {
        model: "Company",
        key: "id"
      }
    },
    typeWorkID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Work",
        key: "id"
      }
    },
  }, {
    sequelize,
    modelName: 'companyTypeWork',
  });
  return companyTypeWork;
};