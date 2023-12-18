import { useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/admin/AdminHeader'
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

function DashboardPage (){
    const navigate = useNavigate()

    
    useEffect(()=>{
        // je verifie si le token existe en local storage
        const token = localStorage.getItem("jwt") // 이거 모든 admin의 page에서는 다 확인해야함.
        
        // si il y a pas de token, (s'il est pas connecte,) on l'envoie a la page login
        if(!token){
            navigate("/login")
        } else{
            //si il a un token, mais pas bien decode, encore on l'envoie a la page login
            const decodedToken = jwtDecode(token)
            console.log(`decodedToken is = user name is`,decodedToken.data);
            if(!decodedToken.data){
                navigate("/login")
            }
        }
        // si c'est pas les deux cas d'erreur, page admin en dessous va afficher 
    },[])


    return(
        <>
            <AdminHeader /> 
            <main>

            </main>
        </>
    )
}

export default DashboardPage