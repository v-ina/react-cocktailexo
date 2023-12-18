import AdminHeader from '../../components/admin/AdminHeader'
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

function AdminCoworkingsPage (){
    // pour recharger le page apres la suppresion, utilise navigate
    // const navigate = useNavigate()
    // et non, si on reste dans le meme page, navigate marche pas!

    const [coworkings, setCoworkings] = useState(null)
    const [message, setMessage] = useState(null)

    const fetchCoworkings = async () =>{
        const cowokringResponse = await fetch("http://localhost:3001/api/coworkings")
        const responseEnJson = await cowokringResponse.json()
        setCoworkings(responseEnJson)
    }
    // on cree une fonction qui recupere tout les coworking(.get(findAllCoworking) d'api) et recharge le composant de coworkings

    // et le premier rechargement de composant(page), on recupere tout les coworkings par fonction fetchCoworkings
    useEffect(()=>{
        fetchCoworkings()
        // (async()=>{
        //     const cowokringResponse = await fetch("http://localhost:3001/api/coworkings")
        //     const responseEnJson = await cowokringResponse.json()
        //     setCoworkings(responseEnJson)
        // })()
    },[/*message*/])


    // quand on clique bouton, cette fonction handleDeleteCoworkings va executer.
    // cette fonction prend une parametre pour orienter api(.delete(deleteCoworking)) par id de Coworking choisi.
    // apres le suppression, on recharger le composant de page(par fetchCoworkings()) pour voir directement le resultat de suppression
 
    const handleDeleteCoworkings = async(event, coworkingId) =>{
        const token = localStorage.getItem('jwt')

        console.log(coworkingId);
        await fetch(`http://localhost:3001/api/coworkings/${coworkingId}`, {method: "DELETE", headers: {Authorization : `Bearer ${token}`}})
        // navigate('/admin/coworkings')
        setMessage("coworking supprime")
        fetchCoworkings()
    }


    return(
        <>
            <AdminHeader /> 
            <main>
                {message && <p>{message}</p>}
                <h2>page admincoworkings</h2>
                {coworkings? (
                    <article>
                        {coworkings.map((coworking)=>{
                            return (<>
                                <h3>{coworking.name}</h3>
                                {/* on veut utiliser plusieur parmetres pour onClick, du coup on doit appeler une fontion quand on clique le boutton */}
                                <button onClick={(event)=> handleDeleteCoworkings(event, coworking.id)}>supprimer</button> 
                                {/* 이렇게 parameter 2개 이상 보내고 싶으면 함수를 부르는 함수의 형태로 만들어야 함. */}
                            </>)
                        })}
                        
                    </article>
                ):(
                    <p>traitement en cours</p>
                )}
            </main>
        </>
    )
}

export default AdminCoworkingsPage