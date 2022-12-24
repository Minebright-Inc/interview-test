import { Container, Row, Col } from "react-bootstrap";
import "../App.css";
export const Leftpart = () => {
  return (
    <Col md={6} className="d-flex align-items-center justify-content-center ">
      <div className="description">
        <h1 className="text-left mb-5">Learn to code by watching others</h1>
        <p className="text-left d-block">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
    </Col>
  );
};
