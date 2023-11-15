import 'dotenv/config'

const SERVER_PORT = process.env.SERVERPORT
const DATABASE_NAME=process.env.DATABASE_NAME
const SECRET=process.env.SECRET


export {SERVER_PORT, DATABASE_NAME, SECRET}