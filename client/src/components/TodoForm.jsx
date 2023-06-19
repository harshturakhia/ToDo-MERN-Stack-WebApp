import React from 'react'
import { useState } from 'react'
import { addNewTodo } from '../redux/actions/apiCalls';
import { useDispatch } from 'react-redux';
// import { ArrowForwardIcon } from '@mui/icons-material/ArrowForward';

const TodoForm = () => {

    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText("");
    }

    const onInputChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div>
            <form className='form' onSubmit={onFormSubmit}>
                <input placeholder='Enter new todo' className='input' value={text} onChange={onInputChange} />
            </form>
        </div>
    )
}

export default TodoForm
