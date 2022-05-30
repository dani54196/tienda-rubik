"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
// import mysql from "mysql2/promise";
exports.sequelize = new sequelize_1.Sequelize(process.env.MYSQL_DATABASE || "tienda", process.env.MYSQL_USER || "dani", process.env.MYSQL_PASSWORD || "root", {
    host: process.env.MYSQL_HOST || "localhost",
    dialect: "mysql",
    //logging: false, //dont show all the queries
});
function testDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log("Connection has been established successfully.");
        }
        catch (error) {
            console.error("Unable to connect to the database:", error);
            process.exit(1);
        }
    });
}
//testDB() //test the connection
//# sourceMappingURL=db.js.map