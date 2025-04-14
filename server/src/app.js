"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const routes_1 = __importDefault(require("./routes/routes"));
const app = (0, express_1.default)();
app.use(cors());
app.use(express_1.default.json());
app.use((req, res, next) => {
    try {
        console.log(`[+] Request recieved from ${req.ip} ${req.path}`);
        next();
    }
    catch (error) {
        console.error(error);
    }
});
app.use('/api/', routes_1.default);
exports.default = app;
