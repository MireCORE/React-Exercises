import { useState } from "react";

const LoginState = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() && password.trim()) {
      setIsLogin(true);
    }
  };

  const handleLogout = () => {
    setIsLogin(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      {isLogin ? (
        <div>
          <h1>Welcome, {username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <br />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <br />

          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginState;
