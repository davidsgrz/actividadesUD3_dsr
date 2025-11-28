import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 

export const ImgCarousel = () => {
  const andaluciaImg = [
    {
      id: 1,
      src: './public/Gr.jpg',
      alt: 'La Alhambra de Granada',
      captionTitle: 'Granada',
      captionText: 'La majestuosa Alhambra con las montañas de Sierra Nevada al fondo.',
    },

    {
      id: 2,
      src: './public/Cordoba.jpg',
      alt: ' Interior de la Mezquita de Córdoba',
      captionTitle: 'Córdoba',
      captionText: 'Vista interior de la Mezquita de Córdoba.',
    },
    {
      id: 3,
      src: './public/Sevilla.jpg',
      alt: 'Torre del Oro de Sevilla',
      captionTitle: 'Sevilla',
      captionText: 'La emblemática Torre del Oro a orillas del río Guadalquivir.',
    },
    {
      id: 4,
      src: './public/Almeria.jpg',
      alt: 'Alzazaba de Almería',
      captionTitle: 'Almería',
      captionText: 'Vista panorámica de la Alcazaba de Almería.',
    },
    {
      id: 5,
      src: './public/Mlaga.jpg',
      alt: 'Vistas de la Catedral de Málaga',
      captionTitle: 'Málaga',
      captionText: 'Vista frontal.',
    },  
    {
      id: 6,
      src: './public/Cadizz.jpg',
      alt: 'Monumento a la Constitucion de Cádiz',
      captionTitle: 'Cádiz',
      captionText: 'Vista del Monumento a la Constitución de frente.',
    },

];
  return (
    <Carousel fade className="rounded shadow-sm overflow-hidden">
      {andaluciaImg.map((img) => (
        <Carousel.Item key={img.id}>
          <img className="d-block w-100" src={img.src} alt={img.alt} />
          <Carousel.Caption className="d-none d-md-block bg-dark bg-opacity-50 rounded">
            <h5>{img.captionTitle}</h5>
            <p>{img.captionText}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};