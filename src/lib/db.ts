import mongoose from "mongoose";

export const connectDB = async () => {

    try {

        await mongoose.connect(
            "mongodb+srv://admin:admin1234@cluster0.jivsgsq.mongodb.net/nextAuth"
        );

        console.log("Connected To MongoDB");

    } catch (error) {

        console.log("Error Connecting To MongoDB: ", error);

    }
};