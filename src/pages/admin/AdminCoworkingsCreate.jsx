import { useState } from 'react'
import './AdminCoworkingsCreate.css'

function AdminCoworkingCreate () {

    const [message, setMessage] = useState(null)

    const handleSubmitCreateCoworking = async(event) => {
        event.preventDefault()

    // creer un formulaire avec autant de champs 
    // qu'il y a de proprietes deans le modele cote back

        let priceByMonth
        let priceByDay
        let priceByHour

        {event.target.priceByMonth.value === '' ? priceByMonth = null : priceByMonth = event.target.priceByMonth.value }
        {event.target.priceByDay.value === '' ? priceByDay = null : priceByDay = event.target.priceByDay.value }
        {event.target.priceByHour.value === '' ? priceByHour = null : priceByHour = event.target.priceByHour.value }
        const name = event.target.name.value
        const addressNumber = event.target.addressNumber.value
        const addressStreet = event.target.addressStreet.value
        const addressCity = event.target.addressCity.value
        const addressPostCode = event.target.addressPostCode.value
        const superficy = event.target.superficy.value
        const capacity = event.target.capacity.value

        const coworkingsToCreate = {
            name : name,
            price : {
                month : priceByMonth,
                day : priceByDay,
                hour : priceByHour
            },
            address : {
                number : addressNumber,
                street : addressStreet,
                city : addressCity,
                postCode : addressPostCode
            },
            superficy : superficy,
            capacity : capacity
        }

        const cowkorkingToJson = JSON.stringify(coworkingsToCreate)
        const token = localStorage.getItem("jwt")

        const createCoworkingResponse = await fetch("http://localhost:3001/api/coworkings", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Barer ${token}`
            },
            body : cowkorkingToJson
        })

        if(createCoworkingResponse.status === 200 || createCoworkingResponse.status ===204 ) {
            setMessage('coworking cree!')
        } else {
            const errorResponse = await createCoworkingResponse.json()
            setMessage(errorResponse.data)
        }
    }

    // on fiat un fetch de type POST sur l'url de creation
    // des coworkings
    // on lui posse le JWT en header
    // et les donnees JOSN en BODY

    
    return (
        <>
        <h1>admin Coworking Create</h1>
        {message && <p>{message}</p>}
            <div className='createCoworking'>
                
                <form action="" onSubmit={handleSubmitCreateCoworking}>
                    <label htmlFor="">
                        Name : 
                        <input type="text" name='name' />
                    </label>

                    <label htmlFor="">
                        Prix par mois : 
                        <input type="number" name="priceByMonth" />
                    </label>
                    <label htmlFor="">
                        Prix par jour : 
                        <input type="number" name="priceByDay" />
                    </label>
                    <label htmlFor="">
                        Prix par heure : 
                        <input type="number" name="priceByHour" />
                    </label>

                    <label htmlFor="">
                        Adresse : Numero : 
                        <input type="text" name="addressNumber" />
                    </label>
                    <label htmlFor="">
                        Adresse : Rue : 
                        <input type="text" name="addressStreet" />
                    </label>
                    <label htmlFor="">
                        Adresse : Ville : 
                        <input type="text" name="addressCity" />
                    </label>
                    <label htmlFor="">
                        Adresse : postcode : 
                        <input type="text" name="addressPostCode" />
                    </label>

                    <label htmlFor="">
                        superficie : 
                        <input type="number" name="superficy" />
                    </label>
                    <label htmlFor="">
                        capacity : 
                        <input type="number" name="capacity" />
                    </label>

                    <input type="submit" />
                </form>
            </div>
        </>
    )

}

export default AdminCoworkingCreate