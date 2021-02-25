import React from 'react'
import { stripHtml } from "string-strip-html";
import {useFav} from './Main'
import './styles/main.css'
export default function Show({data}) {
 const e =  data.summary ? stripHtml(data.summary).result : "None description"
  const {setFav, fav} = useFav()


 const handleAdd = () => {



  const dataNew = {
      data: data,
  
      id: Math.random()

  }
  if([...fav].findIndex(item => item.data.name === dataNew.data.name) > -1) return null

    setFav([...fav, dataNew])
  
 }
    return (
        <div className = 'box'>
          <div className="shownZone">
            <h1>{data.name}</h1>
            <img src = {data.image.medium} className = 'imgHere'></img>
          </div>
          <div className="hiddenZone">
          <h1 >{data.name}</h1>
            <article><p>
                {e}
                </p></article>
                <div className="buttonFlex">
                    {data.genres.map(item => <h3>{item}</h3>)}
                    <div className="buttons">
                    <button onClick = {handleAdd}><i class="fas fa-plus"></i></button>
                    </div>
                  
                </div>
          </div>
        </div>
    )
}

