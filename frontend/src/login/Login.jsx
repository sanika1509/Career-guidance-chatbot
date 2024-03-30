import { useState } from "react";
import "./login.css";
import NavLink from "react-bootstrap/esm/NavLink";

export default function Login(props) {
  const authenticate = () => {
    handleLogin();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningText, setWarningtext] = useState("");

  const handleLogin = () => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    // Validation
    if (email == "" || password == "") {
      setWarningtext("Fields can't be empty !");
    } else if (!emailRegex.test(email)) {
      setWarningtext("Invalid Email address !");
    } else if (password.length < 8) {
      setWarningtext("Password length must be of minimum 8 characters!");
    } else {
      // login the user
      loginUser();
    }
  };

  //   Backend auth logic
  const loginUser = () => {};

  return (
    <>
      <div className="login-parent">
        <div className="login-card form-group card p-4 mt-3 mb-3">
          <h4 className="login-header">Login to continue</h4>
          <p className="label">Email</p>
          <input
            type="email"
            className="form-control input"
            onKeyUp={(e) => {
              setEmail(e.target.value);
              setWarningtext("");
            }}
          />

          <p className="label">Password</p>
          <input
            type="password"
            className="form-control input"
            onKeyUp={(e) => {
              setPassword(e.target.value);
              setWarningtext("");
            }}
          />

          <p className="warning-text danger mt-3">{warningText}</p>
          <button
            onClick={authenticate}
            className="btn btn-primary mt-4"
            type="submit"
          >
            Login
          </button>

          <p className="mt-4 cursor-pointer">Don't have an account ? Sign up</p>
        </div>
      </div>
    </>
  );
}
