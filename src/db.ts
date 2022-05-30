import { Sequelize } from "sequelize";
// import mysql from "mysql2/promise";

export const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE||"tienda",
  process.env.MYSQL_USER||"dani",
  process.env.MYSQL_PASSWORD||"root",
  {
    host: process.env.MYSQL_HOST||"localhost",
    dialect: "mysql",
    //logging: false, //dont show all the queries
  }
);

async function testDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);

    process.exit(1);
  }
}

//testDB() //test the connection

