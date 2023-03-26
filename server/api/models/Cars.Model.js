import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    marca: { type: String, required: true },    
    modelo: { type: String, required: false },
    image: { type: String },
    
  },
  {
    timestamps: true,
  }
);

const Cars = mongoose.model('Cars',userSchema );

export { Cars }