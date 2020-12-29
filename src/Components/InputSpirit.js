import React, {useState} from 'react'
import useFetch from './services/useFetch.js'
import SwitchView from './SwitchView.js'
import {Link} from 'react-router-dom'
import './InputSpirit.module.css'


const InputSpirit = () => {
 const [search, setSearch] = useState('')
 const [jig, setJig] = useState('')
 
 
 const {liq} = useFetch(jig)
  

 
 const runIt = (e) => {
   e.preventDefault()
   setJig(search)
   setSearch('')
  
 }

 const centerstyle = {
   margin: "auto",
   width: "50%",
   
   
   
 }
 
  return (
    
    <div className="App" >
      <form onSubmit = {runIt}>  
      <input type='text' onChange= {e => setSearch(e.target.value) }  value={search}/>
      <input type= 'submit' />
    </form>
    <div style={centerstyle}>
      
      {liq.map(dwinks => <Link to={`detail/${dwinks.idDrink}`} key={dwinks.idDrink}><SwitchView {...dwinks} key={dwinks.idDrink} id={dwinks.idDrink} >{dwinks.strDrink}</SwitchView></Link>)}
    
    </div>

    </div>
  );
}

export default InputSpirit;
