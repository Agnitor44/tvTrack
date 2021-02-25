import React, {useEffect, useState, createContext, useContext} from 'react'
import './styles/landing.css';

import Landing from './Landing'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import Main from './Main'
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




function App() {
  const [ganres, setGanres] = useStickyState(null, 'ganres')

return (
 
<Router>
    <Switch>
      <Route path exact = '/'   component ={() => (
    <Landing  setGanres = {setGanres} ganres = {ganres} />)} />
         <Route path = '/main'   component ={() => (
    <Main   ganresProps = {ganres} />)} />
    </Switch>
 </Router>
 
)

}

export default App;
