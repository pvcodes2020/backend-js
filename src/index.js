import dotenv from "dotenv"
import connectDB from "./db/dbconnection.js"


dotenv.config({
    path:'./env'
})
// import express from "express"

// const app= express()

// /**
//  * This code snippet connects to a MongoDB database using Mongoose and starts a server using Express.
//  * It listens on the specified port and handles any errors that occur during the process.
//  * 
//  * @async
//  * @function
//  * @returns {Promise<void>} A promise that resolves when the connection is established and the server is listening.
//  */
// ;(async () => {
//     try {
//         // Connect to the MongoDB database
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//         // Handle any errors that occur during the process
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error;
//         });

//         // Start the server and listen on the specified port
//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port ${process.env.PORT}`);
//         });
//     }
//  catch(error) {
//         // Log and re-throw any errors that occur during the process
//         console.error("Error: ", error);
//         throw error;
//     }
// })();


connectDB()