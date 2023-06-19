
import ToDoModel from "../model/Todo.js"

export const addTodo = async (req, res) => {
    try {

        const newTodo = await ToDoModel.create({
            data: req.body.data,
            createdAt: Date.now(),
        })

        await newTodo.save();

        return res.status(200).json(newTodo)
    }
    catch (error) {
        return res.status(200).json(error.message)
    }

}

export const getAllTodos = async (req, res) => {
    try {
        const todos = await ToDoModel.find({}).sort({ "createdAt": -1 })

        return res.status(200).json(todos)
    }

    catch (error) {
        return res.status(200).json(error.message)
    }
}


export const toggleTodoDone = async (req, res) => {
    try {
        const todoRef = await ToDoModel.findById(req.params.id)
        const todo = await ToDoModel.findOneAndUpdate(
            { _id: req.params.id },
            { done: !todoRef.done }
        )

        await todo.save();

        return res.status(200).json(todo)
    }

    catch (error) {
        return res.status(200).json(error.message)
    }
}



export const updateTodo = async (req, res) => {
    try {
        await ToDoModel.findOneAndUpdate(
            { _id: req.params.id },
            { data: req.body.data }
        )

        const todo = await ToDoModel.findById(req.params.id)
        return res.status(200).json(todo)
    }

    catch (error) {
        return res.status(200).json(error.message)
    }
}


export const deleteTodo = async (req, res) => {
    try {
        const todo = await ToDoModel.findByIdAndDelete(req.params.id)

        return res.status(200).json(todo)
    }

    catch (error) {
        return res.status(200).json(error.message)
    }
}

