import React from 'react'
import styles from './InputSpirit.module.css'






const CubeView = ({strDrink, strDrinkThumb}) => {
    
    const mystyle = {
        position: "absolute",
        width: "400px",
        height: "400px",
        
        
    }

    


    
    return (
        <div className= {styles.wrapper}>
            <div className= {styles.area} >
                <div className= {styles.front} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} alt= "front cube img"/>
                </div>
                <div className= {styles.back} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} alt= "back cube img"/>
                </div>
                <div className= {styles.right} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} alt= "right cube img" />
                </div>
                <div className={styles.left} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} alt= "left cube img"/>
                </div>
                <div className= {styles.top} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} alt= "top cube img"/>
                </div>
                <div className= {styles.bottom} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} alt= "bottom cube img"/>
                </div>
            </div>
            
            
        </div>
    )
        
    
}

export default CubeView
