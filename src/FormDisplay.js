import React, { useContext } from "react";
import { FormContext } from "./FormProvider";

const FormDisplay = () => {
  const { firstName, lastName, comment, gender, option, checked } = useContext(
    FormContext
  );

  return (
    <>
      <div>
        <h4>{firstName}</h4>
        <h4>{lastName}</h4>
        <h4>{comment}</h4>
        <h4>{gender}</h4>
        <h4>{option}</h4>
        <h4>{checked && "I am agree"}</h4>
      </div>
    </>
  );
};

export default FormDisplay;
