import express from "express"
import bcrypt from "bcrypt"
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/backend-common/config"
import { authMiddleware } from "./authMiddleware";
import { client } from "@repo/db/client";
import { CreateRoomSchema, CreateUserSchema, SigninSchema } from "@repo/common/types";


const app = express();
app.use(express.json());


app.post('/api/v1/signup', async (req, res) => {
    const data = CreateUserSchema.safeParse(req.body);

    if(!data.success) {
       res.status(400).json({
            message: "Invalid data"
        })
        return;
    }

    const { username, password, name} = req.body;

    //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 5);

    const user = await client.user.create({
        data: {
            username: username,
            password: hashedPassword,
            name: name
        }
    })
    res.json({
        message: "Signup successful",
        id: user.id
    });
})

app.post('/api/v1/signin', async (req, res) => {
    const data = SigninSchema.safeParse(req.body);

    if(!data.success) {
        res.status(400).json({
            message: "Invalid data"
        })
        return;
    }

    const { username, password } = req.body;

    const user = await client.user.findUnique({
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

    const data = CreateRoomSchema.safeParse(req.body);

    if(!data.success) {
        res.status(400).json({
            message: "Invalid data"
        })
        return;
    }

    //DB Call
    res.json({
        roomID: 12345
    })
})

app.listen(3001);