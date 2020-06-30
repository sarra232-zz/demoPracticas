import React, {Component} from 'react';
import Button from '../button/Button';
import './popup.scss';

class Popup extends Component {
  render() {
    const {title, children, cta} = this.props;
    return (
      <div id="popup1" className="popup-overlay">
        <div className="popup">
          <h2>{title}</h2>
          <a className="close" href="#">
            &times;
          </a>
          <div className="content">{children}</div>
          {cta && <Button children={cta}></Button>}
        </div>
      </div>
    );
  }
}

export default Popup;
