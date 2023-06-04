const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Express-api-rest', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

const Don = sequelize.define('Don', {
    id: {
    type:DataTypes.INTEGER,
     autoIncrement: true,
    primaryKey: true
    },
    donateur: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull:false
  },
  phone: {
    type:DataTypes.INTEGER,
    allowNull:false
  },
  prix:{
    type:DataTypes.INTEGER,
    allowNull:false
  }
}, {
    timestamps: true
});
//(async () => {
  //  await sequelize.sync({ force: true });
  //})();

  module.exports = Article