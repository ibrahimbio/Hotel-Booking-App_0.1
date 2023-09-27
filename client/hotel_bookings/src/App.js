import React, { useEffect, useState } from "react";
import "./App.css";
import BookingsForm from "./components/BookingsForm";
import BookingsGrid from "./components/BookingsGrid";
import { getBookings } from "./components/BookingsService";

function App() {
  const [bookings, setBookings] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    });
  }, []);

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  const removeBooking = (id) => {
    const bookingsToKeep = bookings.filter(booking => booking._id !== id)
    setBookings(bookingsToKeep)
  }

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return (
    <>
      <BookingsForm addBooking={addBooking}/>
      <BookingsGrid bookings={bookings} removeBooking={removeBooking}/>
    </>
  );
}

export default App;
