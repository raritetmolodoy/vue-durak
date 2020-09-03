const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(1337)

io.on('connection', socket => {})
