import express from "express"
import { appRoutes } from "./routes/app_routes";
const app = express()

app.use ("/",appRoutes)

export default app;