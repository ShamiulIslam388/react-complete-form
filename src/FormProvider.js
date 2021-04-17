import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [comment, setComment] = useState("");
  const [gender, setGender] = useState("");
  const [option, setOption] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      firstName,
      lastName,
      comment,
      gender,
      option,
      checked
    };
    console.log(data);
    setFirstName("");
    setLastName("");
    setComment("");
    setGender("");
    setOption("");
    setChecked(false);
  };
  return (
    <FormContext.Provider
      value={{
        firstName,
        lastName,
        comment,
        gender,
        option,
        checked,
        setFirstName,
        setLastName,
        setChecked,
        setComment,
        setOption,
        setGender,
        handleSubmit
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
