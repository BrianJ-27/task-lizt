import "./App.css";
import TitleHeader from "./components/Title";
import Form from "./components/Form";
import React, { useState } from "react";

const App = () => {

  const [formData, setFormData] = useState({
    newTask: "",
    filterTask: "",
  });

  const handleUpdate = (field, { target }) => {
    setFormData({
      ...formData,
      [field]: target.value,
    });
  };

  return (
    <main className="App">
      <TitleHeader
        title = 'Daily Task List'
      />
      <div>
        <Form
          handleInputData = {handleUpdate}
          formInfo = {formData}
        />
      </div>
    </main>
  );
}

export default App;
