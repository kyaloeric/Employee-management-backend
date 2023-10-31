import dotenv from 'dotenv'
import { NextFunction, Request, Response } from 'express';
dotenv.config();
import jwt from 'jsonwebtoken'
import { Employee } from '../interfaces/employee';

export interface ExtendedEmployee extends Request{
    info?: Employee
}

export const verifyToken = (req:ExtendedEmployee, res:Response, next:NextFunction) =>{
    try {
        const token = req.headers['token'] as string

        if(!token){
            return res.status(404).json({
                message: "You do not have access"
            })
        }

        const data = jwt.verify(token, process.env.SECRET as string) as Employee

        req.info = data
        
    } catch (error) {
        return res.json({
            message: error
        })
    }

    next();
}