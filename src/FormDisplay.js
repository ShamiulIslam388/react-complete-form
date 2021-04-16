import React, { useContext } from "react";
import { FormContext } from "./FormProvider";

const FormDisplay = () => {
  const { formData, show } = useContext(FormContext);

  return (
    <>
      {show && (
        <div>
          <h4>{formData.firstName}</h4>
          <h4>{formData.lastName}</h4>
          <h4>{formData.comment}</h4>
          <h4>{formData.gender}</h4>
          <h4>{formData.option}</h4>
          <h4>{formData.checked && "I am agree"}</h4>
        </div>
      )}
    </>
  );
};

export default FormDisplay;
