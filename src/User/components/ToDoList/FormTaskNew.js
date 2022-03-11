import { React, useState } from "react";
import classes from "./FormTaskNew.module.css";

const FormTaskNew = (props) => {
  const [description, setDescription] = useState("");
  const newTask = { id: `${Math.random()}`, description: "", completed: false };
  const handleChange = (event) => {
    newTask.description = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTask(newTask);
    console.log(newTask);
  };

  return (
    <form className={classes.formTaskNew} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What do you gonna do?"
        className={classes.form_input}
        description={description}
        onChange={handleChange}
      />
      <button className={classes.form_btn}>Add</button>
    </form>
  );
};

export default FormTaskNew;
