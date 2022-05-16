import app from "./app";

// init app
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
