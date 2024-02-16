import React, { useState } from "react";
import axios from 'axios';

const EntryPage = () => {
  const [currentView, setCurrentView] = useState("signUp");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const changeView = (view) => {
    setCurrentView(view);
  };

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:4000/register', { username, email, password });
      console.log('User registered successfully', response.data);
      setSuccessMessage('User registered successfully');
      setErrorMessage('');
    } catch (error) {
      console.error('Error registering user', error);
      setErrorMessage('Error registering user');
      setSuccessMessage('');
    }
  };

  const renderView = () => {
    switch (currentView) {
      case "signUp":
        return (
          <form onSubmit={(e) => { e.preventDefault(); handleRegister(); }}>
            <h2>Sign Up!</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </li>
              </ul>
            </fieldset>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => changeView("logIn")}>Have an Account?</button>
          </form>
        );
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
                <li>
                  <i />
                  <a onClick={() => changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => changeView("signUp")}>
              Create an Account
            </button>
          </form>
        );
      case "PWReset":
        return (
          <form>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => changeView("logIn")}>
              Go Back
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return <section id="entry-page">{renderView()}</section>;
};

export default EntryPage;
