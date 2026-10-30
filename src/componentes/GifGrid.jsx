import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs"; 
import GifCard from "./GifCard";

const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getGifs(category);
            setImages(data);
        };
        fetchData();
    }, [category]);

    return (
        <div>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map((img) => (
                    <GifCard key={img.id} title={img.title} url={img.url} />
                ))}
            </div>
        </div>
    );
};

export default GifGrid;