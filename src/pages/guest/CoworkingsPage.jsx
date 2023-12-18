import Header from '../../components/guest/Header'
import Footer from '../../components/guest/Footer'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function CoworkingsPage (){

    // const apiHost = ?? 왜 한거지?? 만약에 port 자주 바꾸고 어쩌구 하는 경우에 더 편하게 확인해서 쓰려고
    /*
    const apiHost = "http://localhost:3000/api"
    useEffect(()=>{
        (async()=>{
            const coworkingsResponse = await fetch (apiHost+'/coworkings')
    */

    const [coworkings, setCoworkings] = useState(null)
    useEffect(()=>{
        (async()=>{
            const responseAfterFetch = await fetch("http://localhost:3001/api/coworkings")  // fait attention de nombre de port
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
                            return <li><Link to={`/coworking/details/${coworking.id}`}>{coworking.name}</Link></li>
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