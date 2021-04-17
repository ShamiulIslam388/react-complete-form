import React, { useContext } from "react";
import { FormContext } from "./FormProvider";

const Form = () => {
  const {
    firstName,
    lastName,
    comment,
    option,
    checked,
    setFirstName,
    setLastName,
    setComment,
    setOption,
    setChecked,
    setGender,
    handleSubmit
  } = useContext(FormContext);

  return (
    <div className="App">
      <h2>React Complete form Demo</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label>comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </div>
        <select onChange={(e) => setOption(e.target.value)}>
          <option value="programming">Programming</option>
          <option value="graphic design">Graphic Design</option>
          <option value="game development">Game Development</option>
        </select>
        <div>
          <input
            type="checkbox"
            value={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          Agree it
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Form;
