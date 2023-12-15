import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


function CocktailDetailPage (){

    const {id} = useParams()
    
    const [cocktailById , setCocktailById] = useState(null)
    console.log(cocktailById);
    useEffect(()=>{
        (async()=>{
            const responseAfterFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const fetchToJson = await responseAfterFetch.json()
            setCocktailById(fetchToJson.drinks[0])
        })()
    },[])

console.log(cocktailById);

    return(
        <>
            <Header /> 
            <main>
                {cocktailById ? (
                    <article>
                        <p>id : {cocktailById.idDrink}</p>
                        <h1>name : {cocktailById.strDrink}</h1>
                        <img src={cocktailById.strDrinkThumb} alt={cocktailById.strDrink} style={{height : "400px"}} />
                    </article>
                ):(
                    <p>traitement en cours</p>
                )}
                

            </main>
            <Footer />
        
        </>
    )
}

export default CocktailDetailPage