import React from 'react';
import './Button.scss';

const Button = ({children, href}) => {
  return (
    <div>
      <button className="button__butons">
        <a className="button__href-style" href={href}>
          {children}
        </a>
      </button>
    </div>
  );
};
export default Button;
