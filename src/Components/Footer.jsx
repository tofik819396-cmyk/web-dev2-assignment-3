import React from 'react';
import { useState } from 'react';
function Footer() {
  return (
    <>
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Tofik Ahmed. All rights reserved.</p>
    </footer>
    </>
  );
}

export default Footer;