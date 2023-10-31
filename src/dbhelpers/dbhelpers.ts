import mssql from 'mssql'
import { sqlConfig } from '../config/sqlConfig'

export defaulst class Connection {
    private pool: Promise <mssql.ConnectionPool>

    constructo(){
        this.pool = getConnection()
    }
    async getConnection( ): Promise<mssql.ConnectionPool>{
        const pool = mssql.connect(sqlConfig) as Promise<mssql.ConnectionPool>;
        return pool
    }
 

}