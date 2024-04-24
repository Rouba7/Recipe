import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal1 from "./Modal1";

function Cards({label, mealType, url,image}) {
  return (
    <Row className="g-4">
    
        
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Card.Title>{label}</Card.Title>
              <Card.Text>
              {mealType}
              </Card.Text>
              <Card.Link href={url} >Website</Card.Link>
            </Card.Body>
          </Card>
        
      
    </Row>
  );
}

export default Cards;
