
import dotenv from "dotenv";
import dns from 'dns'

dotenv.config();
dns.setServers(["1.1.1.1", "8.8.8.8"])

import { connect } from "mongoose";
import app from "./src/app.js";
import { connectDB } from "./src/config/db.js";
import  express  from 'express';
import { env } from "./src/config/env.js";




const port = env.PORT

const PORT1 = port || 3001;
app.use(express.json())


app.listen(PORT1, () => {
  console.log(`Server running on http://localhost:${PORT1}`);
  connectDB()
});