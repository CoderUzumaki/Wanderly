import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;
    // Hash the password for security
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({ name, email, password: hashedPassword });

    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully!" });
    } catch (err) {
        next(err);
    }
}