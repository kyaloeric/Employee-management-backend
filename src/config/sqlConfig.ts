import dotenv from 'dotenv'
import mssql from 'mssql'


dotenv.config()
const sql = require('mssql')

export const  sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: 'localhost',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: true, // for azure
    trustServerCertificate: false // change to true for local dev / self-signed certs
  }
}


const pool = mssql.connect(sqlConfig)

if(pool.connected){

}

async function testConnection() {
    const pool = await mssql.connect(sqlConfig)
    if (pool.connected){
        console.log('connected to database');
    }
    
}
testConnection()