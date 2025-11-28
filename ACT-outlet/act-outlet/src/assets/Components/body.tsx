import { InfoCard } from './card';
import { Row, Col } from 'react-bootstrap';

export const Body = () => {
  return (
    <>
      <h2 className="h2-titulo">Sección Cards</h2>
      <Row className="cartas">
        <Col md="4">
          <InfoCard
            title="Primera card importada de bootstrap"
            text="Esta card utiliza Bootstrap para su diseño y estilo."
            imageUrl="https://iescuravalera.es/wp-content/uploads/2025/11/25n.jpeg"
          />
        </Col>
        <Col md="4">
          <InfoCard
            imageUrl="https://iescuravalera.es/wp-content/uploads/2025/11/philosophyinfocus-es.jpg"
            text="2º impor de bootstrap."
          />
        </Col>
        <Col md="4">
          <InfoCard
            imageUrl="https://iescuravalera.es/wp-content/uploads/2025/11/Agenda-Eventos-UAL-Semana-Ciencia-2025-980x685px.jpg"
            text="3º import de bootstrap."
          />
        </Col>
      </Row>
    </>
  );
}
