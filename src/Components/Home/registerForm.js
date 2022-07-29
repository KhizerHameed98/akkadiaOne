import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { UberContext } from "../../context/index";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const { submitRegisterForm } = useContext(UberContext);
  const submitForm = (e) => {
    e.preventDefault();
    if (username && email) {
      submitRegisterForm(username, email);
    }
  };
  const setUsernameFunc = (e) => {
    setUsername(e.target.value);
  };
  const setEmailFunc = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-3 mt-5">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          onChange={setUsernameFunc}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={setEmailFunc}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
