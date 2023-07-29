import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('h')

    // Permite que se modifiquen los valores del input
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Evitar que se regargue la página

        // Comprobar si se va a insertar un valor con más de una letra
        if(inputValue.trim().length <= 1) return;

        // setCategories(categories=>[inputValue,...categories]);
        onNewCategory(inputValue.trim());
        
        // Vaciar el input
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>

            <input
                type="text"
                placeholder="Buscar Gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />

        </form>
    )
}
