import mongoose from "mongoose";

mongoose.connect("mongodb+srv://henrique:34418502@alura.mdzg2.mongodb.net/?retryWrites=true&w=majority")
let db=mongoose.connection;

export default db;