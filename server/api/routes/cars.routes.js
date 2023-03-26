import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import {isAuth} from '../../authentication/jwt.js';

import {  getCars, carDetail, createCars} from '../controllers/cars.controller.js';

 const carRoutes = express.Router();

  carRoutes.get('/', getCars);
  carRoutes.get('/:id', carDetail);
  carRoutes.post('/',createCars);  


export { carRoutes };