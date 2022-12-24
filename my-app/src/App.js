import "./App.css";
import { Leftpart } from "./components/Leftpart";
import { Rightpart } from "./components/Rightpart";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container className="container d-flex align-items-center justify-content-center vh-100">
          <Row>
            <Leftpart />
            <Rightpart />
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
