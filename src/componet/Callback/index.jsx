import { useState, useCallback } from "react";

function UseCallBackComp({ loggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState(null);

  const loginForm = useCallback(() => {
    if (email === "example@gmail.com" && password === "123456") {
      setLoginStatus("Logged in successfully");
    } else {
      setLoginStatus("Login failed");
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted");
    loginForm();  // Call the login function
    loggedIn(email);  // If loggedIn is a parent function, pass email
    setEmail("");  // Clear email field after submit
  };

  const handleSubmits = (e) => {
    e.preventDefault();
    console.log("Password submitted");
    loggedIn(password);  // If loggedIn expects password, pass it
    setPassword("");  // Clear password field after submit
  };

  return (
    <>
      <h2>useCallback hook example</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          style={{ margin: "0 5px" }}
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        
      </form>

      <form onSubmit={handleSubmits}>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login Form</button>
      </form>

      {loginStatus && <p>{loginStatus}</p>}
    </>
  );
}

export default UseCallBackComp;
