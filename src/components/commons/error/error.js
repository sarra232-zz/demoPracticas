import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './error.scss';

const Error = ({error, onClick}) => {
  return (
    <div
      className=" error d-flex justify-content-center align-items-center"
      aria-live="polite"
      aria-atomic="true"
      style={{position: 'relative'}}
    >
      <Toast
        style={{
          position: 'absolute',
          top: '200px',
          right: 'auto',
        }}
      >
        <Toast.Header>
          <img src="holder.js/25x25?text=%30" className="rounded mr-2" alt="" />
          <strong className="mr-auto d-flex justify-content-center align-items-center">
            Error
          </strong>
          <small onClick={onClick}>Cerrar</small>
        </Toast.Header>
        <Toast.Body>{error.error}</Toast.Body>
      </Toast>
    </div>
  );
};

export default Error;
