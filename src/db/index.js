import mongoose from "mongoose";

const env = process.env;
const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(`mongodb+srv://${env.MONGODB_USERNAME}:${env.MONGODB_PASSWORD}@cluster0.r37wt.mongodb.net/${env.DB_NAME}?retryWrites=true&w=majority`);
       console.log(`\n MongoDB connected ! to host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("mongo db connection failed  => " , error);
        process.exit(1)
    }
}

export default connectDB