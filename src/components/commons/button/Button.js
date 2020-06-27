/*jshint esversion: 6 */
import React from 'react';
import './Button.scss';

const Button = ({children, href, onclick}) => {
  return (
    <div>
      <button className="button__butons" onClick={onclick}>
        <a className="button__href-style" href={href}>
          {children}
        </a>
      </button>
    </div>
  );
};
export default Button;
