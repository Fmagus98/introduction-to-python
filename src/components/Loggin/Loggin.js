import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../../Utils/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Loggin = () => {
    const [email, setEmail] = useState("")
    const [emailFail, setEmailFail] = useState("")

    const navigate=useNavigate()

    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Consulta la colección de usuarios para buscar el email
        getDocs(collection(db, 'users'))
            .then((querySnapshot) => {
                let info = false
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    if (userData.email === email) {
                        info = true
                        localStorage.setItem("access", "Total access")
                        localStorage.setItem("user", userData.name)
                        navigate('/', { replace: true });
                    }
                });
                if (!info) {
                    setEmailFail(true)
                    setTimeout(() => {
                        setEmailFail(false)
                    }, 2000);
                }
            })
            .catch((error) => {
                console.log('Error al buscar en la colección "users":', error);
            });
    };
    return (
        <>{
            !localStorage.getItem("access") ? <li>  <form onSubmit={handleSubmit} className="form-inline mt-2 mt-md-0">
                <div className="input-group">
                    <input type="email" id="form3Example3" name="email" className="form-control" value={email} onChange={handleChange} />
                    <button type="submit" className="btn" style={{ background: !emailFail ? "#2f6997" : "red" }}>{!emailFail ? "Acceso Total" : "Correo inválido. Intenta de nuevo"}</button>
                </div>
            </form>
            </li> : <li><p className="h6 text-light">Tienes acceso total {localStorage.getItem("user")}!</p></li>
        }</>
    )
}

export default Loggin