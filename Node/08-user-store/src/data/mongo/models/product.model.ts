import mongoose, { Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        unique: true,
    },
    available: {
        type: Boolean,
        default: false,
    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        default: 0,
    },
    description: {
        type: String,        
    },    
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        requiered: [true, "User is required"],
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        requiered: [true, "Category is required"],
    },

});

export const ProductModel = mongoose.model("Product", productSchema);
