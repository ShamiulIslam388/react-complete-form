import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    comment: "",
    gender: "",
    option: "",
    checked: false
  });

  const [show, toogleShow] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      checked: e.target.checked
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toogleShow(true);
    setFormData({ ...formData, firstName: "" });
    setFormData({ ...formData, lastName: "" });
    setFormData({ ...formData, comment: "" });
    setFormData({ ...formData, gender: "" });
    setFormData({ ...formData, option: "" });
    setFormData({ ...formData, checked: false });
  };
  return (
    <FormContext.Provider
      value={{ formData, show, setFormData, handleChange, handleSubmit }}
    >
      {children}
    </FormContext.Provider>
  );
};
