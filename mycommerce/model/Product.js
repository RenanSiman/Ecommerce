import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  category: String,
  price: Int
});

export default model("Product", ProductSchema, "product");
