import { httpStatusCode } from "../../utils/httpStatusCode.js";
import { Cars } from "../models/Cars.Model.js";
import { ObjectId } from "mongodb";




const getCars = async (req, res, next) => {
  
  try {
    const cars = await Cars.find();
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
  console.log("Entro",req.file);
  console.log(req.file_url, 46);
  try {
    const NewCar = new Cars({
      marca: req.body.marca,
      modelo: req.body.modelo,
      imagenUrl: req.file_url,
      //imagen: req.file_url,
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


const updateCars = async (req, res, next) => {
  console.log(req.body)
  try {
    const { id } = req.params;
    const update = req.body;
    const options = { new: true };
    const updatedCar = await Cars.findByIdAndUpdate(id, update, options);

    if (!updatedCar) {
      return res.status(404).json({
        status: 404,
        message: httpStatusCode[404],
        error: "Car not found",
      });
    }

    return res.status(200).json({
      status: 200,
      message: httpStatusCode[200],
      data: { car: updatedCar },
    });
  } catch (error) {
    return next(error);
  }
};
// const createCars = async (req, res, next) => {
//   try {
//     const file = req.file; // obtener el archivo de la petición
//     const result = await cloudinary.uploader.upload(file.path); // subir la imagen a Cloudinary
//     const imageUrl = result.secure_url; // obtener la URL de la imagen subida
//     const NewCar = new Cars({
//       marca: req.body.marca,
//       modelo: req.body.modelo,
//       imagen: imageUrl, // asignar la URL de la imagen a la propiedad "imagen" del objeto "NewCar"
//       anio: req.body.anio,
//       tipo:req.body.tipo,
//     });
//     const newCarDB = await NewCar.save();
//     return res.json({
//       status: 201,
//       message: httpStatusCode[201],
//       data: { cars: newCarDB },
//     });
//   } catch (error) {
//     return next(error);
//   }
// };









export { getCars, carDetail, createCars, updateCars };
