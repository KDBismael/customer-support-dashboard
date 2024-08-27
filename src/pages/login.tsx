import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import { useMainStore } from "../stores/mainStore";

export const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useMainStore()
    const [newUser, setnewUser] = useState({ email: '', password: '' })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setnewUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await login(newUser.email, newUser.password);
        setUser(res);
        navigate("/dashboard")
    }

    return <div className="loginBody">
        <div className="login">
            <div className="myform">
                <form onSubmit={(e) => onSubmit(e)}>
                    <h2>CONNEXION ADMIN</h2>
                    <input onChange={(e) => onChange(e)} required name="email" type="text" placeholder="Email" />
                    <input onChange={(e) => onChange(e)} required name="password" type="password" placeholder="Mot de passe" />
                    <button type="submit">Se connecter</button>
                </form>
            </div>
            <div className="image">
                <img src="/src/assets/5138237.jpg" />
            </div>
        </div>
    </div>
}