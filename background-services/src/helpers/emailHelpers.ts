import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { mail_configs } from '../interfaces/mail_configs';
dotenv.config();

function createTransport (config: mail_configs){
    const transporter = nodemailer.createTransport(config)

    return transporter
}

let configurations: mail_configs = ({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL as string,
        pass: process.env.PASSWORD  as string
    }
})

export const sendMail = async(messageOption: any)=>{
    const transporter = await createTransport(configurations)

    await transporter.verify()

    await transporter.sendMail(messageOption, (error, info)=>{
        if(error){
            console.log(error);
        }else{
            console.log(info.response); 
        }
    })
}