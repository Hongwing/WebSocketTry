const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.of('/chat-socket').on('connection', (client) => {
    client.on('stimer', (interval) => {
        console.log('client custom interval', interval);
        setInterval(() => {
            const date = new Date()
            client.emit('timer', date);
        }, interval);
    })
})

const port = 8000
io.listen(port);
console.info('server is running !')