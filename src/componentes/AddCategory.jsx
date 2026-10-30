import { useState } from "react";

const AddCategory = ({ onAddCategory }) => {
    const [inputValue, setInputValue] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        
        if (inputValue.trim().length <= 1) return;

        onAddCategory(inputValue);
        setInputValue("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
        </form>
    );
};

export default AddCategory;