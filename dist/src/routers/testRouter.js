"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contentRouter = express_1.default.Router();
const testService = require("../services/testService");
contentRouter
    .route("/")
    .get((req, res) => {
    try {
        const db = req.app.get("db");
        testService.getTestItems(db)
            .then((testItems) => {
            res.send({ content: testItems, error: false, errorMsg: {} });
        }).catch((err) => {
            res.send({ content: null, error: true, errorMsg: err });
        });
    }
    catch (error) {
        res.send({ content: null, error: true, errorMsg: error });
    }
});
module.exports = contentRouter;
