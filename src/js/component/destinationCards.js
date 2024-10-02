import React from "react";
import "../../styles/destinationCards.css";


const DestinationCards = () => {
    
    return(
        <div className="container destination-grid">
            <div className="card text-bg-dark">
                <img src="https://blogskystorage.s3.amazonaws.com/2023/06/que-hacer-en-cancun.jpeg" className="card-img" alt="Cancún" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-white">México</h5>
                    <p className="card-text text-white">Cancún</p>
                </div>
            </div>
            <div className="card text-bg-dark">
                <img src="https://c4.wallpaperflare.com/wallpaper/43/779/691/sugar-loaf-mountain-botafogo-beach-rio-de-janeiro-sunrise-wallpaper-preview.jpg" className="card-img" alt="Rio de Janeiro" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-white">Brasil</h5>
                    <p className="card-text text-white">Rio de Janeiro</p>
                </div>
            </div>
            <div className="card text-bg-dark">
                <img src="https://www.medellin.travel/wp-content/uploads/2021/02/Guatape3-1.png" className="card-img" alt="Guatapé" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-white">Colombia</h5>
                    <p className="card-text text-white">Guatapé</p>
                </div>
            </div>
            <div className="card text-bg-dark">
                <img src="https://trexperienceperu.com/sites/default/files/llama_at_the_top_of_machu_picchu_trexperience.jpg" className="card-img" alt="Machu Picchu" />
                <div className="card-img-overlay">
                    <h5 className="card-title text-white">Perú</h5>
                    <p className="card-text text-white">Machu Picchu</p>
                </div>
            </div>
        </div>
    );
}

export default DestinationCards;