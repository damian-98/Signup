import React, { useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

function Login() {
  let navigate = useNavigate();

  // 👇️ store input's value in state
  const [fName, setFName] = useState("");
  const [fNameError, setFNameError] = useState("");

  const [lName, setLName] = useState("");
  const [lNameError, setLNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // 👇️ handles input's value
  const handleFNameChange = (e) => {
    setFNameError("");
    setFName(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLNameError("");
    setLName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailError("");
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordError("");
    setPassword(e.target.value);
  };

  // 👇️ handles submission
  const handleSubmit = (e) => {
    e.preventDefault();

    //checking if first name empty
    if (!fName) {
      setFNameError("First Name Required");
    }

    // checking if last name is empty
    if (!lName) {
      setLNameError("Last Name Required");
    }

    // checking if email is empty
    if (!email) {
      setEmailError("Email Required");
      // checking for certain patterns that makes a vaild email address
    } else if (!/\w+@\w+\.(net|com|edu|org)/.test(email)) {
      setEmailError("Email is invalid");
    }

    const isContainsSymbol = /^(?=.*[!@#$%^&*])/;
    if (!isContainsSymbol.test(password)) {
      setPasswordError(
        "Password must contain at least one of the following symbols !@#$%^&*"
      );

      const isContainsUppercase = /^(?=.*[A-Z])/;
      if (!isContainsUppercase.test(password)) {
        setPasswordError(
          "Password must Password must have at least one Uppercase Character."
        );
      }

      const isContainsLowercase = /^(?=.*[a-z])/;
      if (!isContainsLowercase.test(password)) {
        setPasswordError(
          "Password must have at least one Lowercase Character."
        );
      }

      const isContainsNumber = /^(?=.*[0-9])/;
      if (!isContainsNumber.test(password)) {
        setPasswordError(
          "Password must contain at least one Digit between 0 and 9."
        );
      }

      const isValidLength = /^.{6,10}$/;
      if (!password) {
        setPasswordError("Password Required.");
      } else if (!isValidLength.test(password)) {
        setPasswordError("Password must be 6-10 Characters Long.");
      }
    }

    // checking if all fields are filled to submit
    if (fName && lName && email && password) {
      // clearing input's value
      setFName("");
      setLName("");
      setEmail("");
      setPassword("");

      Swal.fire({
        position: "top-right",
        title: `Welcome to your new account ${fName} ! `,
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <form className="form-box spacing">
      <label>
        <div>
          <h1>Create Account</h1>
        </div>
        <div className="starPopUp">
          <label className={`${fNameError && "star"}`}>First Name</label>
        </div>
        <input
          className={`"form-control" ${fNameError && "required"}`}
          type="text"
          id="firstName"
          value={fName}
          placeholder="First Name"
          onChange={handleFNameChange}
        />
        <span style={{ fontSize: 15, color: "red" }}>{fNameError}</span>
      </label>
      <label>
        <div className="starPopUp">
          <label className={`${lNameError && "star"}`}>Last Name</label>
        </div>
        <input
          className={`"form-control" ${lNameError && "required"}`}
          id="lastName"
          type="text"
          value={lName}
          placeholder="Last Name"
          onChange={handleLNameChange}
        />
        <span style={{ fontSize: 15, color: "red" }}>{lNameError}</span>
      </label>{" "}
      <div>
        <label>
          <div className="starPopUp">
            <label className={`${emailError && "star"}`}>Email</label>
          </div>
          <input
            className={`"form-control" ${emailError && "required"}`}
            type="text"
            id="email"
            value={email}
            placeholder="Email Address"
            onChange={handleEmailChange}
          />
          <span style={{ fontSize: 15, color: "red" }}>{emailError}</span>
        </label>
      </div>
      <div className="starPopUp">
        <label className={`${passwordError && "star"}`}>Password</label>
      </div>
      <input
        className={`"form-control" ${passwordError && "required"}`}
        type="password"
        id="password"
        value={password}
        placeholder="Password"
        onChange={handlePasswordChange}
      />
      <span style={{ fontSize: 15, color: "red" }}>{passwordError}</span>
      <div>
        <label className="checkbox-text">
          I want to recieve promotions and updates via email.{" "}
        </label>{" "}
      </div>
      <div className="">
        <button
          onClick={handleSubmit}
          type="submit"
          className="btnSubmit btn-primary"
        >
          SIGN UP
        </button>
        <span
          onClick={() => {
            navigate("/home");
          }}
          id="info"
        >
          Already have an account? Sign in
        </span>
      </div>
    </form>
  );
}

export default Login;
