import { Outlet } from "react-router-dom";

import Navbar from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";

function MainLayout(){
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default MainLayout