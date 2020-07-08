import React from 'react';
import './error.scss';

const Error = (error) => {
  return (
    <div
      aria-live="polite"
      aria-atomic="true"
      class="d-flex justify-content-center align-items-center"
      style="min-height: 200px;"
    >
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded mr-2" alt="...">
            <strong class="mr-auto">Mensaje de error</strong>
            <small>Alerta!</small>
            <button
              type="button"
              class="ml-2 mb-1 close"
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </img>
          <div class="toast-body">{error}</div>
        </div>
      </div>
    </div>
  );
};

export default Error;
