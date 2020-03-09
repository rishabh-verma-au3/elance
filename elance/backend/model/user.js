var Sequelize = require('sequelize');
var sequelize = new Sequelize('postgres://postgres:root@localhost:5432/freelance');

// setup User model and its fields.
var User = sequelize.define('users', {
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
    .then(() => console.log('users table has been successfully created, if one doesn\'t exist'))
    .catch(error => console.log('This error occured', error));

// export User model for use in other files.
module.exports = User;