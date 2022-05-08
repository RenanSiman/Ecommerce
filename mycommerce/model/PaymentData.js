import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const PaymentDataSchema = new Schema({
  cardNumber: String,
  name: String,
  validationCode: String,
  expirationDate: String
});

export default model("PaymentData", PaymentDataSchema, "paymentData");
