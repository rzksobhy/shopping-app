// read `.env` file
require("dotenv").config()

// connect to database
import { connect } from "./database"
connect().then(console.log).catch(console.error)

import express from "express"
import bodyParser from "body-parser"

const app = express()
const port = process.env.PORT!

import client from "./client"
import api from "./api"

// parse JSON request body
app.use(bodyParser.json())

// Api
app.use("/api", api)

// serve client app
app.use(client)

app.listen(port, () => {
    console.log(`App is listenning on port ${port}`)
})
