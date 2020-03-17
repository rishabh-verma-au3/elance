const Sequelize = require("sequelize");
const db = {};
//const URL = 'postgres://postgres:root@localhost:5432/freelance'
// const URL = require("../dbs",{dialect:'postgres'})
//const URL = 'postgres://gvermwaovlhuqr:03bcb0e09b80963069edc64fca830f5c81598b352c1821d816edbceaf1f9df8f@ec2-52-23-14-156.compute-1.amazonaws.com/freelance'
const URL="postgres://bhjtctut:hoaWbaD1q4DA1sHxARwDXuwm6Sm1Jxbj@drona.db.elephantsql.com:5432/bhjtctut"

const sequelize = new Sequelize(URL,{logging: false});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync({ force: false }).then(res => console.log("table created" + res));

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = sequelize;