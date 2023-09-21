import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "Email Is Required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email Address"]
    },
    name: {
        type: String,
        required: [true, "Full Name Is Required"],
        maxLength: [30, "Full Name Should Be Less Than 30 Characters"]
    },
    password: {
        type: String,
        required: [true, "Password Is Required"],
        select: false
    }
});

const User = models.User || model("User", UserSchema);

export default User;