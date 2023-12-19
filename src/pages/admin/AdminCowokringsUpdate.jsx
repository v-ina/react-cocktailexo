import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function AdminCowokringsUpdate () {

    // recupere id par parametre
    const {id} = useParams()
    const [coworking, setCowokring] = useState(null)

    // appele fetch par coworking id qu'on avait recuprer de parametre url
    // response sera remplir nos formulaires
    useEffect(()=>{
        (async()=>{
            const coworkingReponse = await fetch(`http://localhost:3001/api/coworkings/${id}`)
            const reponseToJson = await coworkingReponse.json()
            setCowokring(reponseToJson.data)
        })()
    },[])
    
console.log(coworking);

    return(
        <>
            <h1>admin Coworking Update</h1>
            {coworking  && (
                <div className='createCoworking'>
                <form action="">
                    <label htmlFor="">
                        Name : 
                        <input type="text" name='name' defaultValue={coworking.name}/>
                    </label>

                    <label htmlFor="">
                        Prix par mois : 
                        <input type="number" name="priceByMonth"  defaultValue={coworking.price.month}/>
                    </label>
                    <label htmlFor="">
                        Prix par jour : 
                        <input type="number" name="priceByDay" defaultValue={coworking.price.day} />
                    </label>
                    <label htmlFor="">
                        Prix par heure : 
                        <input type="number" name="priceByHour"  defaultValue={coworking.price.hour}/>
                    </label>

                    <label htmlFor="">
                        Adresse : Numero : 
                        <input type="text" name="addressNumber"  defaultValue={coworking.address.number}/>
                    </label>
                    <label htmlFor="">
                        Adresse : Rue : 
                        <input type="text" name="addressStreet"  defaultValue={coworking.address.street}/>
                    </label>
                    <label htmlFor="">
                        Adresse : Ville : 
                        <input type="text" name="addressCity"  defaultValue={coworking.address.city}/>
                    </label>
                    <label htmlFor="">
                        Adresse : postcode : 
                        <input type="text" name="addressPostCode"  defaultValue={coworking.address.postCode}/>
                    </label>

                    <label htmlFor="">
                        superficie : 
                        <input type="number" name="superficy"  defaultValue={coworking.superficy}/>
                    </label>
                    <label htmlFor="">
                        capacity : 
                        <input type="number" name="capacity"  defaultValue={coworking.capacity}/>
                    </label>

                    <input type="submit" />
                </form>
            </div>
            )}
            
        </>
    )
}

export default AdminCowokringsUpdate