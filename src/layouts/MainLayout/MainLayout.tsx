import { Outlet } from "react-router-dom";

import Navbar from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import ScrollToTop from "../../components/common/ScrollToTop/ScrollToTop";

function MainLayout(){
    return (
        <>
            <ScrollToTop />
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default MainLayout