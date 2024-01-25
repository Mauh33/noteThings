import { useCallback, useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { LayoutProps } from "../../types/interface";

function Layout({ children }: LayoutProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const updateScreenWidth = useCallback(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, [updateScreenWidth]);

  return (
    <>
      <Header screenWidth={screenWidth} />
      <main className='main-content'>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
