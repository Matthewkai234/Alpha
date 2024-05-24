import mongoose, { Schema, Types, model } from "mongoose";

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image: {
      type: Object,
      required: true,
    },
    price: {
        type: Number,
        default: 1,
    },
    slug: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String, // Corrected from `true` to `String`, assuming a description is textual
      required: true, // Added required if it must be provided
    },
    dicount: {
      type: Number,
      default: 0,
    },

    finalPrice: {
      type: Number,
      default: 1,
    },
    typecar: { // Added the `typecar` field
      type: String,
      default: 'BMW',
      enum: ['BMW', 'KIA', 'FORD', 'MERCEDES', 'TOYOTA', 'HYUNDAI'],
    },
    picecType:{
      type: String,
      default:'engine',
      enum:['engine', 'turbo','exhaust']
    },
    supplement:{
      type: String,
      default:'GPS',
      enum:['GPS', 'seats','tires']
    },
  },
  {
    timestamps: true,
  }
);

const productModel = model("Product", productSchema);
export default productModel;
