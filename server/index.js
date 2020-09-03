const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)

server.listen(1337)

let count = 0

const cons = (...v) => {
  console.clear()
  console.log(...v)
}

io.on('connection', socket => {
  if (count === 2) {
    socket.emit('userOverflow')
    cons('overflow attempt', count)
    socket.disconnect()
    return
  }

  cons(++count)

  socket.on('disconnect', () => cons(--count))
})
