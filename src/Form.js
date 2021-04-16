import React, { useContext } from "react";
import { FormContext } from "./FormProvider";

const Form = () => {
  const { formData, handleChange, handleSubmit } = useContext(FormContext);
  return (
    <div className="App">
      <h2>React Complete form Demo</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label>comment</label>
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
          />
          Female
        </div>
        <select name="option" onChange={handleChange}>
          <option value="programming">Programming</option>
          <option value="graphic design">Graphic Design</option>
          <option value="game development">Game Development</option>
        </select>
        <div>
          <input
            type="checkbox"
            value={formData.checked}
            onChange={handleChange}
          />
          Agree it
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
