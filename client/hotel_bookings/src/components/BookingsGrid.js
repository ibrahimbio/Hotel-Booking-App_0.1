import BookingsCard from "./BookingsCard";

const BookingsGrid = ({bookings, removeBooking}) => {
    const bookingsList = bookings.map((booking) => {
        return <BookingsCard booking={booking} key={booking._id} removeBooking={removeBooking}/>

    })
    return (  
        <>
        {bookingsList}
        </>
    );
}
 
export default BookingsGrid;