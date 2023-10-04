import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import "./gifGrid.css"

export const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)

    return (
        <>
            <h3> { category } </h3>
            <div className="card-grid">
                {
                    images.map( (image, key) => {
                        return <GifItem key={key} {...image}></GifItem>
                    })
                }
            </div>
        </>
    )
}