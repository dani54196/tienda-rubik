"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const app = (0, express_1.default)();
// config
app.set("port", process.env.PORT || 3000);
// middlewares
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
//app.use("/api/students", studentsRoutes);
app.use("/api/users", users_routes_1.default);
// index route
app.get("/", (req, res) => {
    res.status(200).json({ message: "Welcome to the API" });
});
exports.default = app;
//# sourceMappingURL=app.js.map