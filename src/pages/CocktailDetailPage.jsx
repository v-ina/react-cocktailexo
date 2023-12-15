import Header from '../components/Header'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CocktailCard from '../components/CocktailCard'

function CocktailDetailPage (){

    const {id} = useParams()
    
    const [cocktailById , setCocktailById] = useState(null)

    useEffect(()=>{
        (async()=>{
            const responseAfterFetch = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
            const fetchToJson = await responseAfterFetch.json()
            setCocktailById(fetchToJson.drinks[0])
        })()
    },[id]) // useEffect안에서 밖에서 선언됐던 변수를 썼기 때문에 이 배열안에 넣어주길 바람. 그래서 이 배열안의 변수가 바뀔떄에도, component를 다시 charger 하도록 적어주는 거임. 
    // 없어도 동작은 하지만 확실하게 원하는 것같음

    return(
        <>
            <Header /> 
            <main>
                {cocktailById ? (
                    <CocktailCard cocktail={cocktailById}/>
                    // <article>
                    //     <p>id : {cocktailById.idDrink}</p>
                    //     <h1>name : {cocktailById.strDrink}</h1>
                    //     <img src={cocktailById.strDrinkThumb} alt={cocktailById.strDrink} style={{height : "400px"}} />
                    // </article>
                ):(
                    <p>traitement en cours</p>
                )}
            </main>
            <Footer />
        </>
    )
}

export default CocktailDetailPage