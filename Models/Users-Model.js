const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Express-api-rest', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

const User = sequelize.define('User', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull:false
  },
  gender: {
    type:DataTypes.STRING,
    allowNull:false
  },
  phone:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
}, {
    timestamps: true
});
//(async () => {
  //  await sequelize.sync({ force: true });
  //})();

  module.exports = User