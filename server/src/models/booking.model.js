const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const COLLECTION_NAME = "booking";

const newSchema =new Schema(
    {
        Name: { 
          type: String,
            required: true,
        },
        status: {
          type: String,
          default: "active",
          enum: ["active", "inactive"],
        },
        Email: {
            type: String,
            required: true,
        },
        People:{
            type: Number,
            required: true,
        },
        Note:{
          type: String,
          default: "null",
        },
        Time: {
        type: Date,
        default: Date.now,
    },
       
      },
      {
        timestamps: true,
        collection: COLLECTION_NAME,
      }
);

module.exports = mongoose.model(COLLECTION_NAME, newSchema);