import express from "express"
import jwt from "jsonwebtoken"
import cookie from "cookie"
import { users } from "../database"

interface RequestBody {
    username: string
    password: string
}

const Router = express.Router()

const Key = process.env.KEY!

Router.post("/login", (req, res) => {
    // TODO: check if type of `body` is the same `RequestBody`
    const body: RequestBody = req.body

    const user = users.findOne(body)

    if (user == null) {
        res.json(JSON.stringify({
            msg: "invalid username/password!",
        }))
        return
    }

    const jwt_token = jwt.sign({ username: body.username }, Key)
    const token_cookie = cookie.serialize("token", jwt_token, {
        maxAge: 60 * 60 * 24, // one day
        httpOnly: true,
        secure: true,
    })

    res.setHeader("Set-Cookie", token_cookie)
    res.redirect("/")
})

export default Router
