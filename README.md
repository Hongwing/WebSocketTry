## <div style="text-align: center">WebSocketTry</div>

<div style="text-align: center">
    <img alt="websocketgif" src="./websocket.gif" width="240" height="auto" />
</div>

### #1
Try WebSocket  To Get Data Instantly From Server

This repo built because of A **question**

> How to update a datatable instantly, real-time ?

Well, I got a solution that We can use **Ajax Polling Data**, But I mean,  It's not instant actually and near real-time

So another way to get it done is **websocket**

### #2

```
server: websocket-server
client: client to connect websocket-server

/** 1 */
cd server && npm install && node index.js

/** 2 */
cd client/ct && npm install && npm start

Now, See.
```