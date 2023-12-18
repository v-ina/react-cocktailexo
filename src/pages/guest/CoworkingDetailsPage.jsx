import Header from '../../components/guest/Header'
import Footer from '../../components/guest/Footer'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function CoworkingDetailsPage (){

    const { id } = useParams()
    console.log(id);

    const [coworking, setCoworking] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseAfterFetch = await fetch(`http://localhost:3001/api/coworkings/${id}`)
            const responseToJson = await responseAfterFetch.json()
            setCoworking(responseToJson)
        })()
    },[id])

    return(
        <>
            <Header /> 
            <main>
                {coworking ? (
                    <article>
                        <p>{id}</p>
                        <h2>coworking detail pages</h2>
                        <p>id : {coworking.data.id}</p>
                        <p>name : {coworking.data.name}</p>
                        <p>price-day : {coworking.data.price.day}</p>
                    </article>
                ) :(
                    <p>traitement en cours</p>
                )}

            </main>
            <Footer />
        </>
    )
}

export default CoworkingDetailsPage