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
    const parsedData = CreateUserSchema.safeParse(req.body);

    if (!parsedData.success) {
        res.status(400).json({
            message: "Invalid data"
        })
        return;
    }

    const { username, password, name, photo } = parsedData.data;

    //Hashing the password
    const hashedPassword = await bcrypt.hash(password, 5);

    try {
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
    } catch (e) {
        res.status(411).json({
            message: "User already exists"
        });
    }
})

app.post('/api/v1/signin', async (req, res) => {
    const parsedData = SigninSchema.safeParse(req.body);

    if (!parsedData.success) {
        res.status(400).json({
            message: "Invalid data"
        })
        return;
    }

    const { username, password } = req.body;

    
    const user = await client.user.findUnique({
        where: {
            username: username
        }
    })
    
    if (!user) {
        res.status(403).json({
            message: "Not Authorised"
        })
        return;
    }
    //Comparing the hashed password
    const passwordMatched = await bcrypt.compare(password, user.password);

    const userId = user?.id;
    if (passwordMatched) {
        const token = jwt.sign({
            userId
        }, JWT_SECRET);
    

    res.json({
        message: "Signed in successfully",
        userId: userId,
        token: token,
        passwordMatched
    })
    }
})

app.get('/api/v1/room', authMiddleware, async (req, res) => {

    const parsedData = CreateRoomSchema.safeParse(req.body);

    if (!parsedData.success) {
        res.status(400).json({
            message: "Invalid data"
        })
        return;
    }
    // @ts-ignore
    const userId = req.userId;
    try {
        const room = await client.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userId
            }
        })

        res.json({
            roomID: room.id
        })
    } catch (e) {
        res.status(411).json({
            message: "Room name already exists"
        })
    }
})

app.get('/api/v1/chats/:roomId', async (req, res) => {
    const roomId = Number(req.params.roomId);
    console.log("Fetching messages for room:", roomId);

    const messages = await client.chat.findMany({
        where:{
            roomId
        },
        orderBy: {
            id:"desc"
        },
        take: 50 //Limiting the messages to latest 50  
    })

    res.json({
        messages
    })
});

//Add the route which given the slug returns the room to the user. 

app.listen(3001);