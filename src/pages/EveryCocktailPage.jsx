import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function EveryCocktailPage (){

    const [cocktailList, setCocktailList] = useState(null)

    useEffect(()=>{ (async()=>{
        const responseAfterFetch = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=")
        const apiToJson = await responseAfterFetch.json()
        setCocktailList(apiToJson.drinks)
    })() }, [])

    return(
        <>
            <Header /> 
            <main>
                {cocktailList? (
                    <ul>
                        {cocktailList.map((cocktail)=>{
                            return <li><Link to={`/cocktail/${cocktail.idDrink}/detail`}>{cocktail.strDrink}</Link></li>
                        })}
                    </ul>
                ):(
                    <p>traitement en cours</p>
                )}
            </main>
            <Footer />
        </>
    )
}

export default EveryCocktailPage