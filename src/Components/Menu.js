import React from 'react'
import styles from './InputSpirit.module.css'






const Menu = ({strDrink, strDrinkThumb}) => {
    
    const mystyle = {
        position: "absolute",
        width: "400px",
        height: "400px",
        
        
    }

    


    
    return (
        <div className= {styles.wrapper}>
            <div className= {styles.area} >
                <div className= {styles.front} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} alt/>
                </div>
                <div className= {styles.back} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic}/>
                </div>
                <div className= {styles.right} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} />
                </div>
                <div className={styles.left} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic}/>
                </div>
                <div className= {styles.top} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic} />
                </div>
                <div className= {styles.bottom} style={mystyle}>
                    <img src={strDrinkThumb} className= {styles.drinkpic}/>
                </div>
            </div>
            
            
        </div>
    )
        
    
}

export default Menu
