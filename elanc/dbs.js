// // const {Pool}=require('pg')


// // const pool=new Pool({
   
// //     'host':'ec2-52-23-14-156.compute-1.amazonaws.com',
// //     'database':' dek7n6io0rksaq',
// //     'user':'gvermwaovlhuqr',
// //     'port':'5432',
// //     'password':'03bcb0e09b80963069edc64fca830f5c81598b352c1821d816edbceaf1f9df8f',
// //     'Heroku CLI' :'heroku pg:psql postgresql-dimensional-59262 --app flanc',
// //     'dialect': 'postgres',
// //     'NODE_ENV':'development',

// // })

// //let pool=`postgres://postgres:03bcb0e09b80963069edc64fca830f5c81598b352c1821d816edbceaf1f9df8f@gvermwaovlhuqr:5432/freelance`

// // Host:
// // 'ec2-52-73-247-67.compute-1.amazonaws.com'
// // Database:
// // 'dc7614ludq2505'
// // User:
// // 'ufnakvexngobvb'
// // Port:
// // '5432'
// // Password:
// // '820610d4f0f366f557d0e45506616787e59b68eae98809d9872dcb535839d88f'
// // URI:
// // 'postgres://ufnakvexngobvb:820610d4f0f366f557d0e45506616787e59b68eae98809d9872dcb535839d88f@ec2-52-73-247-67.compute-1.amazonaws.com:5432/dc7614ludq2505'
// // Heroku :
// // 'heroku pg:psql postgresql-shaped-84698 --app elanc'
// //  user:'ufnakvexngobvb',
// //     host:'ec2-52-73-247-67.compute-1.amazonaws.com',
// //     database:'dc7614ludq2505',
// //     password:''URI':'postgres://gvermwaovlhuqr:03bcb0e09b80963069edc64fca830f5c81598b352c1821d816edbceaf1f9df8f@ec2-52-23-14-156.compute-1.amazonaws.com:5432/dek7n6io0rksaq',

// // const client = new Pool({
// //     connectionString:'	postgres://rawctzzd:1AGH5yesO2x-CHFG6HDuNTY8cqtYrsoK@drona.db.elephantsql.com:5432/rawctzzd',
// //     ssl: true,
// //   });
  
// // module.exports= client ; 


// const Sequelize = require("sequelize");
// ​
// // ================================= User Authentication Model --------------------
// ​
// const userModel = require("../models/Users");
// ​
// // -------------------------------- Cards Models ------------------------
// ​
// const jadeModel = require("../models/jadeC");
// ​
// const connection = new Sequelize(
//   "postgres://bhjtctut:hoaWbaD1q4DA1sHxARwDXuwm6Sm1Jxbj@drona.db.elephantsql.com:5432/bhjtctut",
//   {
//     logging: false
//   }
// );
// ​
// connection
//   .authenticate()
//   .then(() => console.log("Connected With Databse"))
//   .catch(err => console.log(err));
// ​
// connection
//   .sync({
//     force: false
//   })
//   .then(() => console.log("Table Created Successfully"))
//   .catch(err => {
//     throw err;
//   });
// ​
// const users = userModel(connection, Sequelize);
// const jade = jadeModel(connection, Sequelize);
// ​
// jade.belongsTo(users, { as: "userRef", foreignKey: "userId" });
// ​
// module.exports = {
//   users,
//   jade
// }