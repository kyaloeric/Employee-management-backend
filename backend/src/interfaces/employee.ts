import { Request } from "express";

export interface Employee{
    name:string,
    email: string,
    employee_id: string,
    role : string
}

export interface LoginEmployee extends Request{
    email: string,
    password: string
}