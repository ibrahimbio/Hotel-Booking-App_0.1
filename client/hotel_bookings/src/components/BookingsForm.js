import React, { useState } from "react";
import { postBooking } from "./BookingsService";

const BookingsForm = ({ addBooking }) => {
  const [checked, setChecked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checked_in: checked,
  });

  const onChange = (e) => {
    const newFormData = Object.assign({}, formData);
    newFormData[e.target.name] = e.target.value;
    setFormData(newFormData);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newFormData = { ...formData };
    newFormData.checked_in = checked;
    postBooking(newFormData).then((data) => {
      addBooking(data);
    });
    setFormData({
      name: "",
      email: "",
      checked_in: false,
    });
  };

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <form onSubmit={onSubmit} id="bookings-form">
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
        <input value={checked} type="checkbox" onChange={handleChange} />
        <br></br>
      </div>

      <input type="submit" value="save" id="save" />
    </form>
  );
};

export default BookingsForm;
