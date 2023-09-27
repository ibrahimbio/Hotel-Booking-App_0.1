import React, { useEffect, useState } from "react";
import "./App.css";
import BookingsForm from "./components/BookingsForm";
import BookingsGrid from "./components/BookingsGrid";
import { getBookings } from "./components/BookingsService";

function App() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookings().then((allBookings) => {
      setBookings(allBookings);
    });
  }, []);

  const addBooking = (booking) => {
    setBookings([...bookings, booking])
  }

  return (
    <>
      <BookingsForm addBooking={addBooking}/>
      <BookingsGrid bookings={bookings}/>
    </>
  );
}

export default App;
