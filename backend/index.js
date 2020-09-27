const config = require('./config/config')
const app = require('./app')
const {sequelize} = require('./database/connector')
const port = config.app.port || 5000
app.listen(port, () => {
    console.log(`Server has been started ${port}`)
});

sequelize.authenticate()
    .then(() => console.log('Connection DB: successful.'))
    .catch((err) => console.error('Connection DB: error', err));