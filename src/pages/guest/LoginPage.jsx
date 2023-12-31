import Header from '../../components/guest/Header'
import Footer from '../../components/guest/Footer'
import { useState } from 'react'


function LoginPage (){

    const [message, setMessage] = useState(null)


    const handleLogin = async(event) => {
        event.preventDefault()


        // username est ce que l'utilisateur ecrit dans le champs username de formulaire
        // et password est pareil
        // on va creer un object pour le transformer en json. 
        // j'avais untiliser 'name' dans mon api, du coup j'ai stoquer la valeur d'input(username) de champs formulaire a 'name'
        // avec JSON.stringify(), on chage loginData en json pour envoyer a l'api login
        const username = event.target.username.value
        const password = event.target.password.value
        const loginData = { name: username, password }
        const loginDataJson = JSON.stringify(loginData)
        console.log(loginDataJson);
    
        // apres qu'on envoie l'input en json a notre api, il nous donne la response 
        // (pour preciser le type d'infos qu'on envoie, on met headers:{"Content-type" : "application/json"} )
        // pour notre api peut recupere req.body, on a mit body: loginDataJson 
        // quand on a reussi a login, on peut recuperer token dans la res.json d
        const loginResponse = await fetch("http://localhost:3001/api/users/login", {method : "POST", headers: {"Content-type" : "application/json"}, body : loginDataJson})
        const loginResponseData = await loginResponse.json()
        const token = loginResponseData.data


        if(token){
            localStorage.setItem("jwt", token)   // 캐시를 삭제하거나, 토큰의 시간이 다 되면 localStorage에 jwt는 사라짐.
            setMessage("vous etes bien connecte")
        } else {
            setMessage("erreur lors de la connextion")
            // on veut recharger le composant le cas d'erruer => useState
        }
}


    return(
        <>
            <Header /> 
            <main>
                {message && <p>{message}</p>}
                <h1>login page</h1>
                <form onSubmit={handleLogin} action="">
                    <label htmlFor="">username
                        <input type="text" name='username' />
                    </label>
                    <label htmlFor="">password
                        <input type="text" name='password' />
                    </label>
                    <input type="submit" />
                </form>
            </main>
            <Footer />
        </>
    )
}

export default LoginPage