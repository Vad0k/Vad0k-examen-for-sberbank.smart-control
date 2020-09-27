const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const housesRouter = require('./routes/houses')
const roomsRouter = require('./routes/rooms')
const buttonsRouter = require('./routes/buttons')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../frontend/build')))
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    })
    console.log('Server Run: "PRODUCTION", Nice!')
} else {
    console.log('Server Run: "DEVELOPMENT", Nice!')
}

app.use('/api/houses', housesRouter)
app.use('/api/rooms', roomsRouter)
app.use('/api/buttons', buttonsRouter)

module.exports = app;