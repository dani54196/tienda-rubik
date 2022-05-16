import express from "express";

const app = express();

// config
app.set("port", process.env.PORT || 3000);

export default app;