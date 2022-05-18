import app from "./app";
import "./db";

import dotenv from "dotenv";
dotenv.config();

// init app
function main() {
  app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
  });
}

main();
