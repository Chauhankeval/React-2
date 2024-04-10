import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const TextFiled = () => {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();

  return (
    <div className="flex justify-center mt-[50px] items-center gap-x-4 ">
      <TextField
        value={Name}
        onChange={(e) => setName(e.target.value)}
        className="bg-gray-200 flex "
        id="outlined-basic"
        label="Enter Your name"
        variant="outlined"
      />
      <TextField
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-gray-200 flex "
        id="outlined-basic"
        label="Enter Email"
        variant="outlined"
      />
      <Button variant="contained" color="success">
        Add
      </Button>

      <Button variant="outlined" color="error">
        <DeleteIcon />
      </Button>
    </div>
  );
};

export default TextFiled;
