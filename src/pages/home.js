import React from 'react';
import  {logout} from './auth'
import { history } from '../history'

function home() {

    const handleLogout = () =>{
        logout()
        history.push('/login')
    }

    return(
        <div>
            <h1>
                Tela Inicial
            </h1>
            <div>
            <button onClick={handleLogout} >logout</button>
            </div>
        </div>
    )
}

export default home;