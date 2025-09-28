import { Send } from './../node_modules/@types/express-serve-static-core/index.d';
import express from "express"

export const app = express()


app.get("/", (req, res)=> {
    res.send("DevFolio server is running..")
})


