'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hiker_Trail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hiker_Trail.belongsTo(models.Hiker) //fk
      Hiker_Trail.belongsTo(models.Trail) //fk
    }
  };
  Hiker_Trail.init({
    completed: { 
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },    

  }, {
    sequelize,
    modelName: 'Hiker_Trail',
  });
  return Hiker_Trail;
};