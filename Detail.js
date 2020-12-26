import React from 'react'
import useFetchId from './services/useFetchId.js'




const Detail = ({match}) => {

    const {details} = useFetchId(match.params.id)
    const mix = []

    for( let i = 1; i < 16; i++) {
        if (details[`strMeasure${i}`] == null){
            break
        }
        mix.push(<li key={details[`strIngredient${i}`]}>{details[`strIngredient${i}`]} : {details[`strMeasure${i}`]}</li>)
    }
     

 
       
     
  



  
    
  
  
  

    return (
        <div>
            <div>
            <h1> {details.strDrink} </h1>
            <h1> {details.strGlass}</h1>
            </div>
            <div>
            {mix}
            </div>
            <div>
                <h1>{details.strInstructions}</h1>
            </div>
        </div>
    )
}

export default Detail