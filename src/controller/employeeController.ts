import { Request, Response} from 'express'
import {v4} from 'uuid'
import mssql from 'mssql'
import bcrypt  from 'bcrypt'
import { sqlConfig } from '../config/sqlConfig'


export const registerEmployee = async(req:Request, res: Response) => {
    try{
        
        let { name, email, phone_no, id_no, KRA_PIN, NHIF_NO, NSSF_NO, password, welcomed} =req.body
        let employee_id = v4()
        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input("employee_id", mssql.VarChar,employee_id)
        .input("name", mssql.VarChar,name)
        .input("email", mssql.VarChar,email)
        .input("phone_no", mssql.VarChar,phone_no)
        .input("id_no", mssql.Int,id_no)
        .input("KRA_PIN", mssql.VarChar,KRA_PIN)
        .input("NHIF_NO", mssql.VarChar,NHIF_NO)
        .input("NSSF_NO", mssql.VarChar,NSSF_NO)
        .input("password", mssql.VarChar,password)
        .execute('registerEmployee')

        return res.status(200).json({
            message: 'Employee registerd successfully'
        })
    }catch (error){
        return res.json({
            error:error
        })
    }
}



export const logiEmployee = async(req: Request, res:Response) =>{
    try {
        
        const (email, password) = req.body

        const pool = await mssql.connect(sqlConfig)

        let user = await (await pool.request().input("email", email).input("password", password).execute('loginEmployee')).recordset
        console.log(user);



    } catch (error) {
        return res.json({
            error:error
        })
    }
}