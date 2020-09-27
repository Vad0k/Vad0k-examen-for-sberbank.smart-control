module.exports = {
    app: {
        port: process.env.PORT,
    },
    db: { // на будущее, если бд будет не SQLite
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    }
}