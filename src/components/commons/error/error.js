import React from 'react';
import Toast from 'react-bootstrap/Toast';
import './error.scss';

const Error = ({error, errorClick}) => {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>Error!</strong>
      {error.error}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={() => errorClick ()}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default Error;
