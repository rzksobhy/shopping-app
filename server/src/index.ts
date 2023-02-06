require("dotenv").config()

import express from "express"
import bodyParser from "body-parser"

import client from "./client"

const app = express()
const port = process.env.PORT!

// parse JSON request body
app.use(bodyParser.json())

// serve client app
app.use(client)

app.listen(port, () => {
    console.log(`App is listenning on port ${port}`)
})
