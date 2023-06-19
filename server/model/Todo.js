import express from "express";
import mongoose from "mongoose";

const ToDoSchema = mongoose.Schema({

    data: {
        type: String,
        required: true,
    },

    done: {
        type: Boolean,
        required: true,
        default: false,
    },

    createdAt: {
        type: Date,
        default: Date.now()
    }

})

const ToDoModel = mongoose.model('ToDoModel', ToDoSchema)

export default ToDoModel