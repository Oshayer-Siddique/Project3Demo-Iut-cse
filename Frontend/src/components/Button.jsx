// ButtonComponent.js
import React from 'react';

function ButtonComponent() {
  const scrollToComponent = () => {
    const aboutUsComponent = document.getElementById('aboutus-component');
    if (aboutUsComponent) {
      aboutUsComponent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <i onClick={scrollToComponent}>About Us</i>
    </div>
  );
}

export default ButtonComponent;
