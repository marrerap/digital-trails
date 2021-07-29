'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Trail.hasMany(models.Hiker_Trail)
      
    }
  };
  Trail.init({
    trailName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Trail',
  });
  return Trail;
};