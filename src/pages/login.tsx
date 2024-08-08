export const Login = () => {
    return <div className="loginBody">
        <div className="login">
            <div className="myform">
                <form action="">
                    <h2>CONNEXION ADMIN</h2>
                    <input type="text" placeholder="Email" />
                    <input type="password" placeholder="Mot de passe" />
                    <button type="submit">Se connecter</button>
                </form>
            </div>
            <div className="image">
                <img src="/src/assets/5138237.jpg" />
            </div>
        </div>
    </div>
}