import { useState } from "react";
import "./signup.css";
import NavLink from "react-bootstrap/esm/NavLink";

export default function SignUp(props) {
  const authenticate = () => {
    handleLogin();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUserName] = useState("");

  const [warningText, setWarningtext] = useState("");

  const handleLogin = () => {
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    // Validation
    if (
      email === "" ||
      password === "" ||
      firstName === "" ||
      lastName === "" ||
      username === ""
    ) {
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
        <div className="login-card form-group card p-4 mt-3">
          <h4 className="login-header">Sign to continue</h4>

          {/* First name */}
          <p className="label">First name</p>
          <input
            type="name"
            className="form-control input"
            onKeyUp={(e) => {
              setPassword(e.target.value);
              setWarningtext("");
            }}
          />

          {/* Last name */}
          <p className="label">Last name</p>
          <input
            type="name"
            className="form-control input"
            onKeyUp={(e) => {
              setPassword(e.target.value);
              setWarningtext("");
            }}
          />

          {/* Username */}
          <p className="label">Username</p>
          <input
            type="username"
            className="form-control input"
            onKeyUp={(e) => {
              setPassword(e.target.value);
              setWarningtext("");
            }}
          />

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
            Sign up
          </button>

          <p className="mt-4 cursor-pointer">
            Already have an account ? log in
          </p>
        </div>
      </div>
    </>
  );
}
