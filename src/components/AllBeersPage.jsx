import React from 'react'
import { useState, useEffect } from 'react'
import './allbeerspage.css'
import { Link } from 'react-router-dom';

export default function AllBeersPage() {
    const [beers, setBeers] = useState([]);


    const getBeers = async (props) => {
        try {
            const data = await fetch('https://ih-beers-api2.herokuapp.com/beers');
            const jsonData = await data.json();
            setBeers(jsonData)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBeers();
    }, [])

    return (
        <div>
            {
                beers.map((eachBeer) => {
                    return (
                        <>
                        <Link to={`/beers/${eachBeer._id}`}>
                        <div className='allbeers-container' key={eachBeer._id}>
                            <div className='allbeers-image-container'>
                                <img className='allbeers-image' src={eachBeer.image_url} alt={eachBeer.name} />
                            </div>
                            <div className='allbeers-info'>
                                <h1>{eachBeer.name}</h1>
                                <h3>{eachBeer.tagline}</h3>
                                <p>{eachBeer.contributed_by}</p>
                            </div>
                        </div>
                        </Link>
                        </>
                    )
                })
            }


        </div>
    )
}
