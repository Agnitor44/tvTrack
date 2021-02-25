import React, {useState} from 'react'
import './styles/modal.css'
import { stripHtml } from "string-strip-html";

export default function ShowOverview({show, setShow, setFav, fav}) {
    const [add, setAdd] = useState(false)

    const des =  show.data.summary ? stripHtml(show.data.summary).result : "None description"

    const handleSubAdd = () => {
      
        const whatToDo = fav.findIndex(item => item.data.name === show.data.name)
        //jest
        if(whatToDo > -1) {
            const rep = [...fav].filter(item => item.data.name != show.data.name)
            setFav(rep)
        }
        //nie ma
        else {
            const dataNew = {
                data: show.data,
                id: Math.random()
          
            }
            setFav([...fav, dataNew])
        }
    }
    

    return (
        <div className = 'modalBgc'>
            <div className="modal">
                <button onClick = {handleSubAdd} className = 'addsub'>{fav.findIndex(item => item.data.name === show.data.name) > -1? <i class="fas fa-minus"></i> : <i class="fas fa-plus"></i>}</button>
                <button onClick = {() => {
                       const div = document.querySelector('div.moviesContainer')
                       div.style.height = 'auto'
                    setShow(null)

                    }} className='back'><i class="fas fa-backward"></i></button>
                <h1>{show.data.name}</h1>
                <div className = 'infoDetailed'>
                <div className="basicInfo">
                    <img src = {show.data.image.original}/>
                 <div>{show.data.genres.map(item => <h4>{item}</h4>)}</div>   
                </div>
                <div className="otherInfo">
                    <article><p>
                        {des}
                        </p></article>

                        <div>
                        <span>{show.data.premiered}</span>
                        <a href= {show.data.url} target = '_blank_'>{show.data.url}</a>
                        </div>
                     
                </div>
                </div>
               
            </div>
        </div>
    )
}
