import { useState } from "react";

import {
  registerUser,
} from "../../services/auth.service";

function Register() {
  const [formData, setFormData] =
    useState({
      name: "",
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
      await registerUser(
        formData
      );

      alert(
        "Registration Successful"
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
        type="text"
        name="name"
        placeholder="Name"
        value={
          formData.name
        }
        onChange={
          handleChange
        }
      />

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
        Register
      </button>
    </form>
  );
}

export default Register;