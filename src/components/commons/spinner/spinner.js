import React, {Component} from 'react';
import './spinner.scss';

class Spinner extends Component {
  render() {
    return (
      <div class="spinner">
        <span class="spinner-inner-1"></span>
        <span class="spinner-inner-2"></span>
        <span class="spinner-inner-3"></span>
      </div>
    );
  }
}

export default Spinner;
