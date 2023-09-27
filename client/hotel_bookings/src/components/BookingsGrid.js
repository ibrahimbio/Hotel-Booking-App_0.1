import BookingsCard from "./BookingsCard";

const BookingsGrid = ({bookings}) => {
    const bookingsList = bookings.map((booking) => {
        return <BookingsCard booking={booking} key={booking._id}/>

    })
    return (  
        <>
        {bookingsList}
        </>
    );
}
 
export default BookingsGrid;