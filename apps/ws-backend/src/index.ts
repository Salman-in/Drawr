import { WebSocketServer, WebSocket } from 'ws';
import jwt, { decode } from 'jsonwebtoken';
import { JWT_SECRET } from "@repo/backend-common/config"
import { client } from "@repo/db/client"

const wss = new WebSocketServer({ port: 8080 });

function checkUser(token: string): string | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);

  //As we know we are encoding an object, so if we get any string then close the ws connection and stop the execution.
  if (typeof decoded == "string") {
    return null;
  }

  if (!decoded || !decoded.userId) {
    return null;
  }
  return decoded.userId;
  } catch (e) {
    return null;
  }
}

interface User {
  ws: WebSocket,
  rooms: string[],
  userId: string
}

const users: User[] = [];

wss.on('connection', function connection(ws, request) {
  const url = request.url;

  if (!url) {
    return ws.close();
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') ?? "";

  const userId = checkUser(token);

  if (userId == null) {
    ws.close();
    return null;
  }

  users.push({
    userId,
    rooms: [],
    ws
  })

  ws.on('message', async function message(data) {
    const parsedData = JSON.parse(data as unknown as string); // {type: "join_room", "roomId": 1}
    if (parsedData.type === "join_room") {
      const user = users.find(x => x.ws === ws);
      user?.rooms.push(parsedData.roomId);
    }

    if (parsedData.type === "leave_room") {
      const user = users.find(x => x.ws === ws);
      if (!user) {
        return;
      }
      user.rooms = user?.rooms.filter(x => x === parsedData.room);
    }

    // {type: "chat", message: "hi there", roomId: 123}
    if (parsedData.type === "chat") {
      const roomId = parsedData.roomId; 
      const message = parsedData.message;

      //although this is not a good approach as the db call will cause delay in the chat to be recieved( optimal way is to use a queue).
      await client.chat.create({
        data: {
          roomId,
          message,
          userId
        }
      })

      users.forEach((user) => {
        if (user.rooms.includes(roomId)) {
          user.ws.send(JSON.stringify({
            type: "chat",
            message: message,
            roomId
          }))
        }
      })
    }
  });
});