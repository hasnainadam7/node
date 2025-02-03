import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import path from "path";

dotenv.config();

connectDB()
  .then(() => {
    console.log("\nConnected to database\n");
  })
  .catch((error) => {
    console.log("\nError occured :\n", error);
    process.exit(1);
  });

// (async () => {
//   try {
//     await mongoose.connect(`${DB_URI}/${DB_NAME}`, {});
//     app.on("error", (error) => {
//       console.log(error);
//       process.exit(1);
//     });

//     app.listen(PORT, () => {
//       console.log(`Server is running on port ${PORT}`);
//     });
//   } catch (error) {
//     console.log("Error ", error);
//   }
// })();
