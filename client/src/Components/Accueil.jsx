import React, { useState, useEffect }  from "react";



const Accueil = () => {
    useEffect(() => {
        getAllFurnitures();
    }, [])

    const getAllFurnitures = async() => {
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
            <h1>Accueil</h1>
        );
    };


export default Accueil;