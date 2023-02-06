import express from "express"
import path from "path"

const Router = express.Router()
const client_path = path.resolve(process.env.CLIENT_PATH!)

// statics dir
Router.use(express.static(client_path))

Router.get("/*", (_, res) => {
    res.sendFile(path.join(client_path, "index.html"))
})

export default Router
