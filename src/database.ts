import mongoose from "mongoose";

export async function mongoConnect() {
  try {
    await mongoose.connect("mongodb://root:password@127.0.0.1:27017", {
      dbName: "backend-ts",
    });
    console.log("Connected!");
  } catch (error) {
    console.log(`Ups hubo un error con la base de datos ${error}`);
  }
}
