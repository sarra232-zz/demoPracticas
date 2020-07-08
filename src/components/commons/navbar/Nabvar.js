import React from 'react';
import Button from '../button/Button';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar navbar navbar-dark bg-dark">
      <div className="navbar__config-bar">
        <a href="/" className="navbar__confi-icon button__href-style">
          Demo
        </a>
        <section className="navbar__config-section">
          <Button children={'Huella dígital'} href="/demo/fingerprint" />
        </section>
        <section className="navbar__config-section">
          <Button children={'Segmento'} href="/demo/segment" />
        </section>
      </div>
    </header>
  );
};

export default Navbar;
