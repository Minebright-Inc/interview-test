import { Col } from "react-bootstrap";
import { Formtemplate } from "./Form";
import { Banner } from "./Banner";
export const Rightpart = () => {
  return (
    <Col md={6} className="col-md-6">
      <Banner />
      <Formtemplate />
    </Col>
  );
};
