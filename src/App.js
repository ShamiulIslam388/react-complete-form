import React from "react";
import "./styles.css";
import Form from "./Form";
import { FormProvider } from "./FormProvider";
import FormDisplay from "./FormDisplay";

function App() {
  return (
    <FormProvider>
      <Form />
      <div className="App">
        <FormDisplay />
      </div>
    </FormProvider>
  );
}

export default App;
