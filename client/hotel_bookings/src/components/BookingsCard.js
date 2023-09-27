const BookingsCard = ({booking}) => {
    return ( 

        <>
        <p>Name: {booking.name}</p>
        <p>Email: {booking.email}</p>
        <p>Checked in: {booking.checked_in}</p>
        
        </>
     );
}
 
export default BookingsCard;