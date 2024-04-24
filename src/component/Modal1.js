import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Modal1(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        {props.name}
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            More Info
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div>
                <h3>Ingredients</h3>
                <ul>
                    {props && props.ing.map((items,index)=>(
                        <li key={index}>{items.text}</li>
                    ))}
                </ul>
            </div>
            <hr/>
            
            
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

