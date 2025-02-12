import express from "express"
import bcrypt from "bcrypt"
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "./config"
import { authMiddleware } from "./authMiddleware";
import * as src from "@repo/db/client";


const app = express();
app.use(express.json());

app.post('/api/v1/signup', async (req, res) => {
    const { username, password } = req.body;

    //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await src.client.user.create({
        data: {
            username: username,
            password: hashedPassword
        }
    })
    res.json({
        message: "Signup successful",
        id: user.id
    });
})

app.post('/api/v1/signin', async (req, res) => {
    const { username, password } = req.body;

    const user = await src.client.user.findUnique({
        where: {
            username
        }
    })

    const userId = user?.id;

    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        message: "Signed in successfully",
        userId: userId,
        token: token
    })
})

app.get('/api/v1/room',authMiddleware, (req, res) => {

    //DB Call
    res.json({
        roomID: 12345
    })
})

app.listen(3001);