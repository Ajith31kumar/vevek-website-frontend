import React, { useState } from "react";

const DemographicsForm = ({ onSubmit }) => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (age && gender) {
      onSubmit({ age, gender }); 
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="demographics-form">
      <h1 className="h1form">Enter Your Demographics</h1>
      <form onSubmit={handleSubmit}>
        <div className="infield-l">
          <input
            type="number"
            name="age"
            placeholder="Age"
            min="1"
            max="120"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="infield-l">
          <label className="span-class">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="button-class" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DemographicsForm;