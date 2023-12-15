function CocktailCard ({cocktail}){
    return(
        <article>
            <p>id : {cocktail.idDrink}</p>
            <h1>name : {cocktail.strDrink}</h1>
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} style={{height : "400px"}} />
        </article>
    )
}

export default  CocktailCard