import React, {useEffect, useState, useLayoutEffect, useCallback, useContext, createContext} from 'react'
import './styles/main.css'
import FilmNav from './FilmNav'
import { get } from 'animejs'
import Show from './Show'


function useStickyState(defaultValue, key) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
   useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  
const Fav = createContext()
export const useFav = () => {
  return useContext(Fav)
}

const useForceUpdate = () => useState()[1];

export default function Main({ganresProps}) {

    const [fav, setFav] = useStickyState([], 'fav')
    const value = {
        fav,
        setFav
      }

    const [ganres, setganres] = useState(ganresProps)  
    const [list, setList] = useState([])
    const [element, setElement] = useState([])
  
    const forceUpdate = useForceUpdate();
    const getList = () => {
        let arr = []
        for( let i =0; i< 200; i++) {
           
            fetch(`https://api.tvmaze.com/shows/${ Math.floor(Math.random() * 8000 + 1 )}`).then(res => res.json()).then(data => {

                        if(data.genres.findIndex(item => item === 'Science-Fiction') > -1) {
                          const id = data.genres.findIndex(item => item === 'Science-Fiction')
                          data.genres[id] = 'ScienceFiction'
                        }
                       if(data.genres.includes(ganres[0]|| ganres[1]|| ganres[2]|| ganres[3]|| ganres[4]|| ganres[5]|| ganres[6]|| ganres[7]|| ganres[8]|| ganres[9]))
                       {
                         if(arr.findIndex(item => item.name === data.name) > -1) return null
                        arr.push(data)
                       }
                    
              }).catch(err => console.log(err))
        }
            
            return arr
         
            
        }
       
        useEffect(async() => {
           
        const res = await getList()
        setList(res)
       
      
       
        }, [])
        
   
    return (
      
        <Fav.Provider value = {value}>
  
        <div className="checkInfo">
        <button onClick = {() => {
             const res = getList()
             setList(res)
        setElement(list.map(item => <Show data = {item}/>))
     
        }}>Roll new shows!</button>
        <div className = 'genres'>
      {ganres.map(item => <h2>{item}</h2>)}  
        </div>
        </div>
       
        
 
        <div className="moviesContainer">
            {element}
        </div>
        <FilmNav/>
        </Fav.Provider>
        
      
    )
}
