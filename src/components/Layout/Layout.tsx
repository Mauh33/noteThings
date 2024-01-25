import React, { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [isElementHidden, setElementHidden] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleVisibility = () => {
        console.log("click");
    setElementHidden(!isElementHidden);
  };

  const updateScreenWidth = useCallback(() => {
    const newScreenWidth = window.innerWidth;
    setScreenWidth(newScreenWidth);
    toggleVisibility();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);
    return () => window.removeEventListener('resize', updateScreenWidth);
  }, [updateScreenWidth]);

  return (
    <>
      <Header
        itemToShow={isElementHidden}
        toggleVisibility={toggleVisibility}
        screenWidth={screenWidth}
      />
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
