import { React, useState } from "react";
import classes from "./Task.module.css";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid rgba(0,0,0,0.5)",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "space-between",
  gap: "2rem",
};

const styleButtons = {
  fontSize: "1.5rem",
};

const Task = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let [checked, setChecked] = useState(props.completed);
  const [description, setDescription] = useState(props.description);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    props.handleChangeComplete(event.target.checked, props.id);
  };

  const handleEditTask = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmitEdit = () => {
    props.editTask(description, props.id);
    handleClose();
  };

  const handleDelete = () => {
    props.deleteTask(props.id);
  };

  return (
    <div className={classes.task}>
      <Checkbox
        sx={{ "& .MuiSvgIcon-root": { fontSize: 24 } }}
        checked={checked}
        onChange={handleChange}
      />
      <p className={classes.task_title}>{props.description}</p>
      <div className={classes.task_btn_box}>
        <Stack direction="row" spacing={2}>
          <Button color="secondary" onClick={handleOpen} sx={styleButtons}>
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={handleDelete}
            sx={styleButtons}
          >
            Delete
          </Button>
        </Stack>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <input
              type="text"
              value={description}
              className={classes.form_input}
              description={description}
              onChange={handleEditTask}
            />
            <button className={classes.form_btn} onClick={handleSubmitEdit}>
              submit
            </button>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default Task;
