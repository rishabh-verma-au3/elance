var Sequelize = require('sequelize');
var sequelize = require("./config");

var hire = sequelize.define('hire', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false
  },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category:{
      type: Sequelize.STRING,
      allowNull: false

    },
    service:{
      type: Sequelize.STRING,
    },
    alma:{
      type: Sequelize.STRING,
    },
    xp:{
      type: Sequelize.STRING,
    },
    summary:{
      type: Sequelize.STRING,
    },
    age:{
        type: Sequelize.STRING,
      },
      company:{
        type: Sequelize.STRING,
      }

},{
  timestamps: false,
  freezeTableName: true
});
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// create all the defined tables in the specified database.
sequelize.sync()
    .then(() => console.log('Hire table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = hire;