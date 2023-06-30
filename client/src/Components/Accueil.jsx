import React, { useState, useEffect } from "react";
import image from "./Images/Magasin.jpg"

const Accueil = () => {
    useEffect(() => {
        getAllFurnitures();
    }, [])

    const getAllFurnitures = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const allFurnitures = await response.json()
        console.log(allFurnitures)
    };
    // const [data, setData] = useState([]);

    // useEffect(() => {
    // fetch('url_api')
    //     .then(response => response.json())
    //     .then(data => {
    //     setData(data);
    //     })
    //     .catch(error => {
    //     console.error(error);
    //     });
    // }, []);
    // console.log(data)
    return (
        <div>
            <div className="Description">
                <img src={image} alt="Facade magasin" />
                <div className="cadre">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>
    );
}




export default Accueil;