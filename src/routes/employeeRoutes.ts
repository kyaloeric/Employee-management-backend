import { Router } from "express";
import { checkUserDetails, getAllEmployees, loginEmployee, registerEmployee } from "../controller/employeesController";
import { verifyToken } from "../middleware/verifyToken";

const employee_router = Router()

employee_router.post('/register', registerEmployee)
employee_router.post('/login', loginEmployee)
employee_router.get('/',verifyToken, getAllEmployees)
employee_router.get('/check_user_details',verifyToken, checkUserDetails)

export default employee_router;