import { redirect, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  // Crie um state para username iniciando como string vazia.
  const [username, setUsername] = ("");

  // Crie um state para password iniciando como string vazia.
  const [password, setPassword] = ("");

  // Crie um state para message iniciando como string vazia.
  const [message, setMessage] = ("");


  const handleLogin = async () => {
    await fetch("public/users.json")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        const user = users.find(
          (u) => u.username === username && u.password === password
        );
        if (user) {
          localStorage.setItem("authenticated", "true");
          navigate("/dashboard");
        } else {
          setMessage("Login falhou. Verifique suas credenciais.");
        }
      });
  };

  return (

    // Crie uma div pai com className="login-container".
    // Crie <img src="/images/logo.png" style={{ width: 50 }} />
    // Crie um h2 com className="login-title".
    // Crie um input do tipo text com placeholder e value={username} e  onChange={(e) => setUsername(e.target.value)}.
    // Crie um input do tipo password com placeholder e  value={password} e  onChange={(e) => setPassword(e.target.value)}.
    // Crie um buttom com className="login-button" e onClick direcionando para a função handleLogin.
    // Crie um p recebendo o valor de message.
    <>
      < div className="login-container" >
        <img src="/images/logo.png" style={{ width: 50 }} />
        <h2 className="login-title">Login</h2>
        <input type="text" placeholder="Nome do usuário" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="login-button" onClick={handleLogin}>Entrar</button>
        <p>{message}</p>
      </div >
    </>
  )
};

export default Login;
