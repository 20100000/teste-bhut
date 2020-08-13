
const jwt = {
    SECRET: 'ED46CB0D0B9A5B707B40CF9BC7E06259'
}

const mySql = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT,
    PASSWORD: process.env.DB_PASSWORD,
    USER: process.env.DB_USERNAME,
    DATABASE: process.env.DB_DATABASE
}

module.exports = {
    jwt,
    mySql
}
