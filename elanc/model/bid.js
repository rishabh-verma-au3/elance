var Sequelize = require('sequelize');
var sequelize = require("./config");

// setup User model and its fields.
var Bid = sequelize.define('bid', {
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bidAmount: {
        type: Sequelize.STRING,
        allowNull: false
    },
    employer: {
      type: Sequelize.STRING,
      allowNull: false
  },
    charges: {
        type: Sequelize.STRING,
        allowNull: false
    },
    recieve: {
        type: Sequelize.STRING,
        allowNull: false
    },
    time:{
      type: Sequelize.STRING,
      allowNull: false

    }
    // ,
    // createdAt: {
    //   allowNull: false,
    //   type: Sequelize.DATE
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: Sequelize.DATE
    // }
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
    .then(() => console.log('Bid table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = Bid;