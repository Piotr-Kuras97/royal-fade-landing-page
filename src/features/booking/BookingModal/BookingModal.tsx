import Modal from "../../../components/ui/Modal/Modal";

import { useBooking } from "../../../context/BookingContext";
import BookingForm from "../BookingForm/BookingForm";


const BookingModal = () => {
    const {
        isOpen,
        closeBooking,
    } = useBooking();

    return (
        <Modal
            isOpen={isOpen}
            onClose={closeBooking}
        >
            <BookingForm />
        </Modal>
    );
}

export default BookingModal;