import { Outlet } from "react-router-dom";
import Footer from '../common/Footer/Footer';
import Navbar from "../common/Navbar/Navbar";

const MainLayout = () => {
  return (
    <>
    <Navbar/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default MainLayout   