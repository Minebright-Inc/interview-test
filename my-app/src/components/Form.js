import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export const Formtemplate = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const { firstname, lastname, email, password } = event.target.elements;
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    fetch("/", {
      method: "POST",
      body: JSON.stringify({
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value,
      }),
    });
  };
  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      encType="application/x-www-form-urlencoded"
      method="post"
    >
      <div className="mb-4">
        <div className="mb-4">
          <Form.Control
            className="w-100 form-control"
            type="text"
            name="firstname"
            id="firstname"
            placeholder="First Name"
            aria-label="firstname"
            required
          />
          <Form.Control.Feedback type="invalid" className="invalid-feedback ">
            First Name cannot be empty
          </Form.Control.Feedback>
        </div>
        <div className="mb-4">
          <Form.Control
            className="w-100 form-control"
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            aria-label="lastname"
            required
          />
          <Form.Control.Feedback type="invalid" className="invalid-feedback ">
            Last Name cannot be empty
          </Form.Control.Feedback>
        </div>
        <div className="mb-4">
          <input
            className="w-100 form-control"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            aria-label="email"
            required
          />
          <Form.Control.Feedback type="invalid" className="invalid-feedback ">
            Looks like this is not an email
          </Form.Control.Feedback>
        </div>
        <div className="mb-4">
          <input
            className="w-100 form-control"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
          />
          <Form.Control.Feedback type="invalid" className="invalid-feedback ">
            Password cannot be empty
          </Form.Control.Feedback>
        </div>
      </div>
      <div className="mb-2">
        <button className="btn w-100">
          <div className="btntext">CLAIM YOUR FREE TRIAL</div>
        </button>
      </div>
      <div className="w-100 text-muted text-center">
        <small className="">
          By clicking the button, you are agreeing to our&nbsp;
          <a className="text-danger" href="{}">
            Terms and Services
          </a>
        </small>
      </div>
    </Form>
  );
};
