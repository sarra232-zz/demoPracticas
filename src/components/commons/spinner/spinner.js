import React, {Component} from 'react';
import './spinner.scss';

class Spinner extends Component {
  render() {
    const {children} = this.props;
    return (
      <div>
        <div className="spinner">
          <span className="spinner-inner-1"></span>
          <span className="spinner-inner-2"></span>
          <span className="spinner-inner-3"></span>
        </div>
      </div>
    );
  }
}

export default Spinner;
