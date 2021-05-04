import React, { useState, ChangeEvent } from "react";

import { singIn } from "../../libs/athentication/auth"

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialState);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // ... createUser(values);
    singIn(values);
    setValues({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Ingresa para registrar equipos.</legend>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          name="email"
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={handleInputChange}
          value={values.email}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          name="password"
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={handleInputChange}
          value={values.password}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
