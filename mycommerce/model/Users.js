import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const UserSchema = new Schema({
  name: String,
  login: String,
  password: String,
  emailAddress: String,
  address: Address
});

export default model("User", UserSchema, "user");
