import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";



const Personajes = () => {

    const { store, actions } = useContext(Context);

    return (
    <div className="container">
        <h1 className="title text-danger">Personajes</h1>
        <div className="container">
            {store.personajes == null ? <h1>Cargando personajes...</h1> :
            store.personajes == false ? <h1>Ocurrió un problema cargando los personjaes</h1> :
            store.personajes && store.personajes.length > 0 && store.personajes.map((item) => {
                return (
                    <div className="card" key={item.id}>
                        <img src={`https://dragonball-api.com/transformaciones/${item.name}.webp`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Name: {item.name}</h5>
                            <p className="card-text">Description: {item.descripction}</p>
                            <p className="card-text">Ki: {item.ki}</p>
                            <p className="card-text">Race: {item.race}</p>
                            <p className="card-text">Gender: {item.gender}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                )
            })
            }
            
        </div>
    </div>
    )
}

export default Personajes;