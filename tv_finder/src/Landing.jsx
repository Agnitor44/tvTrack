
import React, {useEffect, useState, createContext, useContext} from 'react'
import './styles/landing.css';
import anime from 'animejs/lib/anime.es.js';
import {useHistory} from "react-router-dom";




export default function Landing({setGanres, ganres}) {
    const history = useHistory()
    const startAnime = () => {
        anime({
            targets: '.block',
            translateX: () => anime.random(-700, 700),
            translateY: () => anime.random(-500, 500),
            scale: () => anime.random(1, 3),
            easing: 'linear',
            duration:3000,
            delay: anime.stagger(5),
            complete: startAnime
            
        })
    }
    const buttonAnimation = () => {
      anime({
        targets: document.querySelectorAll('.pickedButton'),
        translateX: 0,
        delay: anime.stagger(200),
        duration: 5000,
    
    
        
      });
    }
    function resolveAfter() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 500);
      });
    }
     
    useEffect(() => {
      setGanres(null)
      const cont = document.querySelector('.container')
    
      for(let i =0; i<=50; i++) {
        const block = document.createElement('div')
        block.classList.add('block')
      fetch(`https://api.tvmaze.com/shows/${Math.floor(Math.random() * 500 + 1 )}`).then(res => res.json()).then(data => {
    
        block.style.backgroundImage = `url(${data.image.medium})`
     
        cont.appendChild(block)
      
     
      
      }).catch(err => console.log(err))
      startAnime()
    
    }
    }, [])
    
    const [pickZone, setPickZone] = useState(false)
    
    const [visGanres, setVisGanres] = useState(
      {
        Romance: false,
        Drama:false,
        Fantasy: false,
        ScienceFiction: false,
        Criminal: false,
        Action: false,
        Comedy: false,
        Horror: false,
        Thriller: false,
        Anime: false
      },
      
    )
    
    const handleStart = async() => {
      setPickZone(prev => !prev)
    
      const result = await resolveAfter();
      buttonAnimation()
       
      
    }
    
    const handlePick = (ganre) => {
      Object.filter = (obj, predicate) => 
      Object.fromEntries(Object.entries(obj).filter(predicate));

      const filtered = Object.filter(visGanres, ([name, score]) => score); 
      const genresCount = Object.keys(filtered).length
     

      switch (ganre) {
        case 'Romance':
          if(!visGanres.Romance){ if(genresCount<3)setVisGanres({...visGanres, Romance: true})} 
          else setVisGanres({...visGanres, Romance: false})
          break;
    
        case 'Drama': 
        if(!visGanres.Drama){ if(genresCount<3)setVisGanres({...visGanres, Drama: true})} 
        else setVisGanres({...visGanres, Drama: false})
        break;
        case 'Fantasy':
      if(!visGanres.Fantasy){ if(genresCount<3)setVisGanres({...visGanres, Fantasy: true})} 
          else setVisGanres({...visGanres, Fantasy: false})
          break;
    
       case 'ScienceFiction':
        if(!visGanres.ScienceFiction){ if(genresCount<3)setVisGanres({...visGanres, ScienceFiction: true})} 
        else setVisGanres({...visGanres, ScienceFiction: false})
       break;
    
       case 'Criminal':
        if(!visGanres.Criminal){ if(genresCount<3)setVisGanres({...visGanres, Criminal: true})} 
        else setVisGanres({...visGanres, Criminal: false})
       break;
    
       case 'Action':
        if(!visGanres.Action){ if(genresCount<3)setVisGanres({...visGanres, Action: true})} 
        else setVisGanres({...visGanres, Action: false})
       break;
       case 'Comedy':
        if(!visGanres.Comedy){ if(genresCount<3)setVisGanres({...visGanres, Comedy: true})} 
        else setVisGanres({...visGanres, Comedy: false})
       break;
       case 'Thriller':
        if(!visGanres.Thriller){ if(genresCount<3)setVisGanres({...visGanres, Thriller: true})} 
        else setVisGanres({...visGanres, Thriller: false})
       break;
    
       case 'Horror':
        if(!visGanres.Horror){ if(genresCount<3)setVisGanres({...visGanres, Horror: true})} 
        else setVisGanres({...visGanres, Horror: false})
       break;
    
       case 'Anime':
        if(!visGanres.Anime){ if(genresCount<3)setVisGanres({...visGanres, Anime: true})} 
        else setVisGanres({...visGanres, Anime: false})
       break;
        default:
         return

      }
 
    }
    
       return (
      pickZone ?
    <div className = 'pick'>
        <h1>Pick</h1>
        <h4>your favorite genres</h4>
        <div className="ganresBox">
      
          <button style = {{transform: 'translateX(-100%)'}} className= {visGanres.Romance ? "pickedButtonNow" : "pickedButton"} onClick = {handlePick.bind(this, 'Romance')} >Romance</button>
          <button style = {{transform: 'translateX(-200%)'}} className={visGanres.Drama ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Drama')}>Drama</button>
          <button style = {{transform: 'translateX(-300%)'}} className={visGanres.Fantasy ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Fantasy')}>Fantasy</button>
          <button style = {{transform: 'translateX(-400%)'}} className={visGanres.ScienceFiction ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'ScienceFiction')}>SCi-Fi</button>
          <button style = {{transform: 'translateX(-500%)'}} className={visGanres.Criminal ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Criminal')}>Criminal</button>
          <button style = {{transform: 'translateX(-100%)'}} className={visGanres.Action ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Action')}>Action</button>
          <button style = {{transform: 'translateX(-200%)'}} className={visGanres.Comedy ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Comedy')}>Comedy</button>
          <button style = {{transform: 'translateX(-300%)'}} className={visGanres.Horror ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Horror')}>Horror</button>
          <button style = {{transform: 'translateX(-400%)'}} className={visGanres.Thriller ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Thriller')}>Thriller</button>
          <button style = {{transform: 'translateX(-500%)'}} className={visGanres.Anime ? "pickedButtonNow" : "pickedButton"}  onClick = {handlePick.bind(this, 'Anime')}>Anime</button>
        
        </div>
        <button className = 'subButton' onClick = {() => {
          
               Object.filter = (obj, predicate) => 
               Object.fromEntries(Object.entries(obj).filter(predicate));

               const filtered = Object.filter(visGanres, ([name, score]) => score); 
              
      setGanres(ganres = Object.keys(filtered))
      history.push('/main')
        }}>Find Shows</button>
    </div>
    
      :
     <div className = 'container'>
       <h1>TV-Show</h1>
       <h4>finder</h4>
       <button className = 'startButton' onClick = {handleStart}>Start</button>
     <div className = 'wrapIm'></div>
    
    </div>
       
       
      );
}
