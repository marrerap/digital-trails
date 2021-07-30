'use strict';
const {
  Model
} = require('sequelize');
const hiker_trail = require('./hiker_trail');
module.exports = (sequelize, DataTypes) => {
  class Hiker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hiker.hasMany(models.Hiker_Trail)
    }
  };
  Hiker.init({
    firstName: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Hiker',
  });
  return Hiker;  
};