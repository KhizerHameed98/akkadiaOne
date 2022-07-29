import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();

    console.log("submit");
  };
  const setEmailFunc = (e) => {
    console.log(e.target.value);
  };
  const setPasswordFunc = (e) => {
    console.log(e.target.value);
  };

  return (
    <Form>
      <Form.Group
        className="mb-3 mt-5"
        controlId="formBasicEmail"
        onSubmit={submitForm}
      >
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={setPasswordFunc}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit" onClick={submitForm}>
        Submit
      </Button>
    </Form>
  );
};

export default RegisterForm;
