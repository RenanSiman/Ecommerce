import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const AddressSchema = new Schema({
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: Address
});

export default model("Address", AddressSchema, "Address");
