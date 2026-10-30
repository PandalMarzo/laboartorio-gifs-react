import { useState } from "react";
import AddCategory from "./componentes/AddCategory";
import GifGrid from "./componentes/GifGrid";

const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(["Jujutsu Kaisen", "Cyberpunk edgerunners"]);

    const onAddCategory = (newCategory) => {

        if (categorias.includes(newCategory)) return;

        setCategorias([newCategory, ...categorias]);
    };

    return (
        <div>
            <h1>App de gifs</h1>
            
            <AddCategory onAddCategory={onAddCategory} />

            {categorias.map((categoria) => (
                <GifGrid 
                    key={categoria} 
                    category={categoria} 
                />
            ))}
        </div>
    );
};

export default GifExpertApp;