import express from "express"

import login from "./login"
import signin from "./signin"

const Router = express.Router()

Router.use(login)
Router.use(signin)

export default Router
