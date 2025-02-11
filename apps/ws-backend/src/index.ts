import WebSocket from 'ws';

const wss = new WebSocket('ws://localhost:8080');

wss.on('open', function open() {
    wss.send('something');
  });

  wss.on('message', function message(data) {
    console.log('received: %s', data);
  });