import mongoose from "mongoose";
async function connectToDB() {
  try {
    const db = await mongoose.connect(
      process.env.DB_CONNECTION_STRING as string,
    );
    console.log(`successfully connected to the database`);
  } catch (error) {
    console.log(`something went wrong -> ${error}`);
    return;
  }
}
export default connectToDB;
