import React from 'react';
import {logout} from './auth'
import { history } from '../history';

const handleLogout = () =>{
    logout()
    history.push('/login')
}

function home() {
    return(
        <div>
        
            <h1>
                Tela Inicial
            </h1>
            <div>
                <button onClick= {handleLogout} className="form-btn" type="submit">
                    Logout
                </button>
            </div>
        </div>
    )
}

export default home;