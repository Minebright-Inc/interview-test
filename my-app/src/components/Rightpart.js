import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

export const Rightpart = () => {
  return (
    <Col md={6} className="col-md-6">
      <div className="trail text-center mb-4">
        <p className="mb-0">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </div>
      <Form method="post">
        <div className="mb-4">
          <Form.Group className="mb-4">
            <input
              className="w-100 form-control"
              type="text"
              name="firstname"
              id="first-Name"
              placeholder="First Name"
              aria-label="firstname"
              required
            />
          </Form.Group>
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
          </div>
        </div>
        <div className="mb-2">
          <button className="btn w-100">CLAIM YOUR FREE TRIAL</button>
        </div>
        <div className="w-100 text-muted text-center">
          <small className="">
            By clicking the button, you are agreeing to our
            <a className="text-danger" href="{}">
              Terms and Services
            </a>
          </small>
        </div>
      </Form>
    </Col>
  );
};
