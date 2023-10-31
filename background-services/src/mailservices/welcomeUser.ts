import ejs from 'ejs'
import mssql from 'mssql'
import dotenv from 'dotenv'
import { sqlConfig } from '../config/sqlConfig'
import { sendMail } from '../helpers/emailHelpers'
dotenv.config()

export const welcomeUser = async() =>{
    const pool = await mssql.connect(sqlConfig)

    const employees = await (await pool.request().query('SELECT * FROM Employees WHERE welcomed = 0')).recordset

    console.log(employees);
    

    for (let employee of employees){
        ejs.renderFile('templates/welcomeUser.ejs', {Name: employee.name}, async(error, data)=>{
            let mailOptions = {
                from: process.env.EMAIL as string,
                to: employee.email,
                subject: "Welcome Onboard",
                html: data
            }

            try {
                await sendMail(mailOptions)

                await pool.request().query('UPDATE Employees SET welcomed = 1 WHERE welcomed = 0')

                console.log('Emails send to new users');
                
            } catch (error) {
                console.log(error);
                
            }
        })
    }
}