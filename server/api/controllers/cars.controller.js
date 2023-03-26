
import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Cars } from "../models/Cars.Model.js";
import { ObjectId } from 'mongodb';

const getCars = async (req, res, next) => {
 
  try {
    const cars = await Cars.find()
      // .populate({ path: "materialIntervencion",select: "descripcion"})
      // .populate({path:'cliente', select :""})
    return res.status(200).json(cars);
    // return res.json({
    //   //  status : 200,
    //   //  message : httpStatusCode[200],
    //   data: { avisos: avisos },
    // });
    res.send(cars);
  } catch (error) {
    return next(error);
  }
};

const carDetail = async (req, res, next) => {
  try {
    const { id } = req.params;
    const cars = await Cars.findById(id)
      // .populate({ path: "materialIntervencion",select: "descripcion"})
      // .populate({path:'cliente', select :''})
    return res.status(200).json(cars);
 
    return res.json({
      //  status : 200,
      //  message : httpStatusCode[200],
      data: { cars: cars },
    });
    res.send(avisos);
  } catch (error) {
    return next(error);
  }
};


const createCars = async (req, res, next) => {
  try {
    const NewCar = new Avisos({
      marca: req.body.averia,
      modelo: req.body.prioridad,
      imagen: req.body.estado,
    });
    const newCarDB = await NewCar.save();
    //const idCliente = newAvisoDB._id;
    await Cars.updateOne(
      { _id: newCarDB.cliente },
      { $push: { cars: newCarDB._id } },
      { new: true }
    );
    // await Clientes.updateOne(
    //   { _id: newAvisoDB.cliente },
    //   { $push: { averia: averia } },
    //   { new: true }
    // );


    return res.json({
      status: 201,
      message: httpStatusCode[201],
      data: { car: newCarDB },
    });
  } catch (error) {
    return next(error);
  }
};

export {
  getCars,
  carDetail,
  createCars,
};
