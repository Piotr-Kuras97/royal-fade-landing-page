import { Outlet } from "react-router-dom";

import Navbar from "../../components/layouts/Navbar/Navbar";
import Footer from "../../components/layouts/Footer/Footer";
import ScrollToTop from "../../common/ScrollToTop/ScrollToTop";
import BookingModal from "../../features/booking/BookingModal";


function MainLayout(){

    return (
        <>
            <ScrollToTop />
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />

            <BookingModal />
        </>
    )
}

export default MainLayout