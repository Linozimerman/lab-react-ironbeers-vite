import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'


export default function BeerDetailsPage() {
    const beerIndex = useParams().index;
    
    // useEffect(() => {
    //     console.log(eachBeer);
    // }, [])

  return (
    <div>
        <h1>BeerDetailsPage</h1>
    </div>
    
  )
}
