import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect, useState } from 'react'

function CoworkingsPage (){

    const [coworkings, setCoworkings] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseAfterFetch = await fetch("http://localhost:3001/api/coworkings")
            const responseToJson = await responseAfterFetch.json()
            console.log(responseToJson);
            setCoworkings(responseToJson)
        })()
    },[])

console.log(coworkings);
    return(
        <>
            <Header /> 
            <main>
                <h1>bienvenue sur King of coworkings!</h1>
                <h2>coworkings page</h2>
                {coworkings? (
                    <ul>
                        {coworkings.map((coworking)=>{
                            return <li>{coworking.name}</li>
                        })}
                    </ul>
                ) : (
                    <p>.....</p>
                )}
            </main>
            <Footer />
        </>
    )
}

export default CoworkingsPage