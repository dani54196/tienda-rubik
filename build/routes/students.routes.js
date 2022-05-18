"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const students_controller_1 = require("../controllers/students.controller");
router.get("/", students_controller_1.getAllStudents);
exports.default = router;
//# sourceMappingURL=students.routes.js.map