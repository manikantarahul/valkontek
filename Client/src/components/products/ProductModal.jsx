// src/components/ProductModal.jsx
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./ProductModal.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const ProductModal = ({ show, handleClose, product }) => {
  if (!product) return null;

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold text-dark">
          {product.title}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-image-wrapper mb-3">
          <img
            src={product.image}
            alt={product.title}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        <div className="modal-content-section">
          {/* <h6 className="section-heading">Overview</h6> */}
          {/* <p className="text-muted">{product.description}</p> */}

          <div className="card-content">
            <h3>Features</h3>
            <ul className="card-list">
              {product.keys.map((lis, i) => (
                <li key={i}>
                  <span className="dot"/>
                  <span className="point-text" >{lis}</span>

                  
                </li>
                
              ))
            }
            </ul>
          </div>
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button className="modal-button" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ProductModal;
