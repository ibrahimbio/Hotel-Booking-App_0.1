import React, { useState } from "react";

const BookingsForm = ({ addBooking }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checked_in: false,
  });

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     postBooking(formData).then((data) => {
//       addBooking(data);
//     });
//     setFormData({
//       name: "",
//       email: "",
//       checked_in: false,
//     });
//   };

  return (
    <form id="bookings-form">
      <h2>Add a booking:</h2>
      <div className="formWrap">
        <label htmlFor="name">Name:</label>
        <input
          onChange={onChange}
          type="text"
          id="name"
          name="name"
          value={formData.name}
        />
      </div>
      <div className="formWrap">
        <label htmlFor="email">Email:</label>
        <input
          onChange={onChange}
          type="text"
          id="email"
          name="email"
          value={formData.email}
        />
      </div>
      <div className="formWrap">
        <label htmlFor="checked-in">Checked in?</label>
        <input
          onChange={onChange}
          type="checkbox"
          id="checked_in"
          name="checked_in"
          value={formData.checked_in}
        />
      </div>

      <input type="submit" value="save" id="save" />
    </form>
  );
};

export default BookingsForm;
