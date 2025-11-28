import { Card } from 'react-bootstrap';
interface InfoCardProps {
  imageUrl: string;
  text: string;
  title?: string; 
  styleProps?: string; 
}

export const InfoCard: React.FC<InfoCardProps> = ({
  title,
  text,
  imageUrl,
  styleProps,
}) => {
  return (
    <Card className={`shadow-sm h-100 ${styleProps || ''}`}>
      <Card.Img variant="top" src={imageUrl} alt={title || text} />
      <Card.Body>
        {title && <Card.Title>{title}</Card.Title>}
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};