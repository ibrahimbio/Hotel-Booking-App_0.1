import { deleteBooking } from "./BookingsService";

const BookingsCard = ({ booking, removeBooking }) => {
  const handleDelete = () => {
    deleteBooking(booking._id).then(() => {
      removeBooking(booking._id);
    });
  };

  let checkedStatus = ""
  if (booking.checked_in == true) {
    checkedStatus = "True"
  }
  else {checkedStatus = "False"}

  return (
    <>
      <p>Name: {booking.name}</p>
      <p>Email: {booking.email}</p>
      <p>Checked in: {checkedStatus}</p>

    
      <button onClick={handleDelete}> 🗑 </button>
      <hr></hr>
    </>
  );
};

export default BookingsCard;
