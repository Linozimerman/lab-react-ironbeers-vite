import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

export default function HomePage() {
    return (
        <div>
            <div className='homepage-container'>
                <div className='homepage-allbeers-container'>
                    <img src="..\src\assets\beers.png" alt="beers" />
                    <Link className='homepage-link' to={'/beers'}>All Beers</Link>
                    <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, neque porro! Corporis cupiditate deleniti quos!</p>
                </div>
                <div className='homepage-randombeers-container'>
                    <img src="..\src\assets\random-beer.png" alt="random beer" />
                    <Link className='homepage-link' to={'/random-beer'}>Random Beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, neque porro! Corporis cupiditate deleniti quos!</p>
                </div>
                <div className='homepage-newbeer-container'>
                    <img src="..\src\assets\new-beer.png" alt="new beer" />
                    <Link className='homepage-link' to={'/new-beer'}>New Beer</Link>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, neque porro! Corporis cupiditate deleniti quos!</p>
                </div>
            </div>


        </div>
    )
}
