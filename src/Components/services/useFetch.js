import {useState, useEffect} from 'react'



export default function useFetch(word) {

    const [liq, setLiq] = useState([]);
    

    useEffect (() =>{
        if(word !== '')
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${word}`).then(resp => {
          resp.json().then(data => {
            setLiq(data.drinks)
          })
        })
      }, [word]) 
        
    return {liq}



}