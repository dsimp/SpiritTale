import React, {useState} from 'react'
import CubeView from './CubeView.js'
import ListView from './ListView.js'

const SwitchView = ({strDrink, strDrinkThumb}) => {


    const [show, setShow]= useState(false)


    return (

        <div onMouseEnter = {() => setShow(true)} 
            onMouseOut = {() => setShow(false)}>

                { show ? <CubeView strDrink={strDrink} strDrinkThumb={strDrinkThumb}/> : <ListView strDrink={strDrink} strDrinkThumb={strDrinkThumb}/>}
            </div>
    )
}

export default SwitchView