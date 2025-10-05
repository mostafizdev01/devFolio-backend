import express from "express"
import cors from "cors";
import { router } from './routes';

export const app = express()

app.use(express.json());
app.use(cors())


app.use(
    cors({
        origin: ["https://dev-folio-frontend.vercel.app",
         "http://localhost:3000"],
        credentials: true,
    })
);

app.get("/", (req, res) => {
    res.send("DevFolio server is running..")
})

// main route handle
app.use("/api/v1", router)

// 404 Handler
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Route Not Found"
    })
})
