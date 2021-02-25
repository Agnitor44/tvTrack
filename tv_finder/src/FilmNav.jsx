import React, {useEffect, useState} from 'react'
import './styles/pasek.css'
import ShowOverview from './ShowOverview'
import {useFav} from './Main'
import anime from 'animejs/lib/anime.es.js';

export default function FilmNav() {
    const {setFav, fav} = useFav()
    const [show, setShow] = useState(null)
    
   useEffect(() => {
        anime({
            targets: document.querySelectorAll('.kwadrat'),
            translateX: 0,
            duration: 200, 
            easing: 'linear'
          });
    })
    
    const handleDelete = (id) => {
        const rep = [...fav].filter(item => item.id !== id)
        
        setFav(rep)
      
    }
    const handleShowView = (name) => {
        const div = document.querySelector('div.moviesContainer')
        div.style.height = '80vh'
        const search = [...fav].find(item => item.data.name === name)
        setShow(search)
    }

    const mapped = fav.map(item =>{ return (<div style = {{transform: 'translateX(1000%)'}} className = 'kwadrat'>
        <img src = {item.data.image.medium}/>
        <button onClick = {handleShowView.bind(this, item.data.name)} className = 'showView'><i class="far fa-eye"></i></button>
        <button onClick = {handleDelete.bind(this, item.id)} className = 'showDelet'><i class="far fa-trash-alt"></i></button>
    </div>)  } )
  
 
    return (
        <>
       {show && <ShowOverview show = {show} setShow = {setShow} fav = {fav} setFav = {setFav}/>} 
        <div className = 'pasek'>
          
          {mapped}

        </div>
        </>
    )
}
