import { Document } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  euros: number;
  cents: number;
  stock: number;
}

export default IProduct;