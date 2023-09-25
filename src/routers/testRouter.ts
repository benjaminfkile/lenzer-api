import express, { Request, Response } from "express"
const contentRouter = express.Router()
const testService = require("../services/testService")

contentRouter
    .route("/")
    .get((req: Request, res: Response) => {
        try {
            const db = req.app.get("db")
            testService.getTestItems(db)
                .then((testItems: testTypes[]) => {
                    res.send({ content: testItems, error: false, errorMsg: {} })
                }).catch((err: Error) => {
                    res.send({ content: null, error: true, errorMsg: err })
                })
        } catch (error) {
            res.send({ content: null, error: true, errorMsg: error })
        }
    })
module.exports = contentRouter