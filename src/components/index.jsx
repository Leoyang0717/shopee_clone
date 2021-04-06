import React from 'react';
import HeaderComponent from './header/headerComponent';
import NavBarComponent from './header/navBarComponent';

function Index() {
  return (
    <div className="bg-shopee_orange sticky z-10 h-28 text-white ">
      <div className="container mx-auto">
        <NavBarComponent />
        <HeaderComponent />
      </div>
    </div>
  );
}

export default Index;
