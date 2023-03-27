import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Cars } from "../models/Cars.Model.js";
import { ObjectId } from "mongodb";

const getCars = async (req, res, next) => {
  console.log("Entro");
  try {
    const cars = await Cars.find();
    // .populate({ path: "materialIntervencion",select: "descripcion"})
    // .populate({path:'cliente', select :""})
    console.log(cars, 12);
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
    const cars = await Cars.findById(id);
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
  console.log("Entro");
  console.log(req.body, 46);
  try {
    const NewCar = new Cars({
      marca: req.body.marca,
      modelo: req.body.modelo,
      imagen: req.body.imagen,
      anio: req.body.anio,
      tipo:req.body.tipo,
    });
    const newCarDB = await NewCar.save();
    return res.json({
      status: 201,
      message: httpStatusCode[201],
      data: { cars: newCarDB },
    });
  } catch (error) {
    return next(error);
  }
};

export { getCars, carDetail, createCars };
