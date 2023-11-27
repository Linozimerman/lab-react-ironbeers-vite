import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


export default function BeerDetailsPage() {
    const [beer, setBeer] = useState('');
    const beerId = useParams().beerId;
    const beersApi = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`

    const getBeer = async (props) => {
        try {
            const data = await fetch(beersApi);
            const jsonData = await data.json();
            setBeer(jsonData)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getBeer();
        return()=>{
            console.log("component unmounting");//los return en useEffect se ejecutan en el un mounting
        }
    }, [])

    return (
        <div>
            <h1>BeerDetailsPage {beerId}</h1>
            <div className='allbeers-container'>
                <div className='allbeers-image-container'>
                    <img className='allbeers-image' src={beer.image_url} alt={beer.name} />
                </div>
                <div className='allbeers-info'>
                    <h1>{beer.name}</h1>
                    <h3>{beer.tagline}</h3>
                    <p>{beer.description}</p>
                </div>
            </div>
        </div>

    )


}