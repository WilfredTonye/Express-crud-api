const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('Express-api-rest', 'postgres', '123456789', {
    host: 'localhost',
    dialect:'postgres'
  });

const Article = sequelize.define('Article', {
    id: {
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull:false
  },
}, {
    timestamps: true
});
//(async () => {
  //  await sequelize.sync({ force: true });
  //})();

  module.exports = Article