import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Access = () => {
    const [password, setPassword] = useState("")
    const [passwordFail, setPasswordFail] = useState("")
    const navigate = useNavigate()
    const location = useLocation()
    const handleChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    };

    let data = location.pathname.includes("micropython") ? "passwordMicropython" : "passwordPython"
    const failStatus = () => {
        setPasswordFail(true)
        setPassword("")
        setTimeout(() => {
            setPasswordFail(false)
        }, 2000);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length === 16) {
            getDocs(collection(db, data))
                .then((querySnapshot) => {
                    let info = false
                    querySnapshot.forEach((doc) => {
                        const pythonData = doc.data();
                        if (pythonData.password === password) {
                            info = true
                            localStorage.setItem(`access${location.pathname.includes("micropython")?" - micropython":null}`, "Total access")
                            localStorage.setItem(data, pythonData.password)
                            !location.pathname.includes("micropython") ? navigate('/', { replace: true }) : navigate('/micropython', { replace: true })
                            setPassword("")
                        }
                    });
                    if (!info) {
                        failStatus()
                    }
                })
                .catch((error) => {
                    console.error('Error al buscar en la colección "users":', error);
                });
        }
        else {
            failStatus()
        }
    };
    return (
        <>{
            !localStorage.getItem(data) ? <li>  <form onSubmit={handleSubmit} className="form-inline mt-2 mt-md-0">
                <div className="input-group">
                    <input type="text" id="form3Example3" name="password" className="form-control" value={password} onChange={handleChange} />
                    <button type="submit" className="btn" style={{ backgroundColor: passwordFail ? "red" : location.pathname.includes("micropython") ? "rgb(238, 112, 83)" : "#2f6997" }}>{!passwordFail ? "Acceso Total" : "Código inválido. Intenta de nuevo"}</button>
                </div>
            </form>
            </li> : <li><p className="access h6 text-light">Acceso total</p></li>
        }</>
    )
}

export default Access