import React from 'react'
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";
const Popup = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
          <div className="container ml-5 pl-5">
              <a
            className={`recently ${styles.mainHeading} pl-0`}
            href="#"
            onClick={handleShow}
          >
            Recently Booked
          </a>
          </div>
            <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className={`${styles.myModal}`}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-md-8">
              <div className={styles.booking}>
                <button
                  className={`btn btn-outline-success ${styles.bookButton}`}
                  data-dismiss="modal"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="col-md-4 mt-4 mt-md-0">
              <div className={styles.noteBox}>
                <div className={styles.note}>
                  <span className={styles.modalText}>Style:</span>
                  <span className={styles.modalText}>Bantu Knots</span>
                  <br />
                  <span className={styles.modalText}>Stylist:</span>
                  <span className={styles.modalText}>@camile</span>
                  <br />
                  <span className={`${styles.modalText} mb-0`}>Time</span>
                  <span className={`${styles.modalText} mb-0`}>2h</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
        </div>
    )
}

export default Popup
