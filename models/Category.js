const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product.js');

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);


module.exports = Category;