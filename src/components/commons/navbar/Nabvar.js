import React from 'react';
import Button from '../button/Button';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__config-bar">
        <a href="/" className="navbar__confi-icon button__href-style">
          Demo
        </a>
        <section className="navbar__config-section">
          <Button children={'FingerPrint'} href="/demo/fingerprint"></Button>
        </section>
        <section className="navbar__config-section">
          <Button children={'Segment'} href="/demo/segment"></Button>
        </section>
      </div>
    </header>
  );
};

export default Navbar;
