import style from '../style.module.css'
import { useState } from 'react'
import TextField from '@mui/material/TextField';


function Form({ add }) {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        add(value1, value2)
        setValue1('')
        setValue2('')
    }


    return (
        <>
            <form onSubmit={handleSubmit}
                className={style.form}>
                <TextField
                    className={style.value1}
                    value={value1}
                    onChange={event => setValue1(event.target.value)}
                    id="standard-basic"
                    label="Автор"
                    variant="standard" />
                <br />
                <TextField
                    className={style.value2}
                    value={value2}
                    onChange={event => setValue2(event.target.value)}
                    id="standard-basic"
                    label="Сообщение"
                    variant="standard" />
                <br />
                <br />
                <button type='submit'
                    className={style.FormBtn}>
                    Send message
                </button>
            </form>
        </>
    )
}

export default Form;