import React, {Component} from 'react';
import './spinner.scss';

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <span className="spinner-inner-1"></span>
        <span className="spinner-inner-2"></span>
        <span className="spinner-inner-3"></span>
      </div>
    );
  }
}

export default Spinner;
