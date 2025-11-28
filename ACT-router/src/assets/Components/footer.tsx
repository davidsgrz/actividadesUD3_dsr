import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer-container">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <p className="titulo">Tarea rutas DSR</p>
            <p>© 2025 - Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
