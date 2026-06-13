import { useState } from "react";

import {
  loginUser,
} from "../../services/auth.service";

function Login() {
  const [formData, setFormData] =
    useState({
      email: "",
      password: "",
    });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data =
        await loginUser(
          formData
        );

      localStorage.setItem(
        "token",
        data.token
      );

      alert(
        "Login Successful"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={
          formData.email
        }
        onChange={
          handleChange
        }
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={
          formData.password
        }
        onChange={
          handleChange
        }
      />

      <button type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;