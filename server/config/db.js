import mongoose from "mongoose"

const connectDB = async ()=>{
    try {
        mongoose.connection.on('connected',()=> console.log("DataBase Connected SuccessFully")
         );

        await mongoose.connect(`${process.env.MONGODB_URI}/greentop`)
    } catch (error)
    {

        console.error(error.message);
        

    }
}


export default connectDB