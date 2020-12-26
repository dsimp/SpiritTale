import  {useState, useEffect} from 'react'

export default function useFetchId (id) {
    const [details, setDetails]= useState([])

    useEffect( () => {
        if (id !== '')
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(resp =>{
            resp.json().then(data =>{
                setDetails(data.drinks[0])
                
            })

        })
    }, [id])

    console.log(details)

    return {details}
}