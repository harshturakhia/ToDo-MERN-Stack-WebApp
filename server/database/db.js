import mongoose from "mongoose";
mongoose.set('strictQuery', false);

import dotenv from 'dotenv'
dotenv.config();

const Connection = () => {

    try {
        mongoose.connect('mongodb://127.0.0.1:27017/todoRedux', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Database Connected!');
            })
    }
    
    catch (error) {
        console.log('Error while connecting with the database ', error.message)
    }
}

export default Connection;