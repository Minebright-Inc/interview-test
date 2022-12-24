import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";

export const Rightpart = () => {
  return (
    <Col md={6} className="col-md-6">
      <div className=" mb-4">
        <p className="">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </div>
      <Form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </Form>
    </Col>
  );
};
