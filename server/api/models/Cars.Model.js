import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const carsSchema = new Schema(
  {
    marca: { type: String, required: true },    
    modelo: { type: String, required: true },
    imagen: { 
      data: Buffer,
      contentType: String
    },
    imagenUrl: { type: String, required: false },
    tipo: { type: String, required: true },
    anio:{ type:Number, required: true }
  },
  {
    timestamps: true,
  }
);

const Cars = mongoose.model('Cars',carsSchema );

export { Cars }