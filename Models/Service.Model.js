const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Express-api-rest', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

const Service = sequelize.define('Service', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom_service: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull:false
  },
  prix: {
    type: DataTypes.INTEGER,
    allowNull:false
  }
}, {
    timestamps: true
});
//(async () => {
  //  await sequelize.sync({ force: true });
  //})();

  module.exports = Service