import { WebSocketServer } from 'ws';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "@repo/backend-common/config"

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws, request) {
  const url = request.url;

  if(!url) {
    return ws.close();
  }

  const queryParams = new URLSearchParams(url.split('?')[1]);
  const token = queryParams.get('token') ?? "";

  const decoded = jwt.verify(token, JWT_SECRET);

  //As we know we are encoding an object, so if we get any string then close the ws connection and stop the execution.
  if(typeof decoded == "string") {
    ws.close();
    return; 
  }

  if(!decoded || !decoded.userId) {
    return ws.close();
  }

  ws.on('message', function message(data) {
    ws.send('pong');
  });
});