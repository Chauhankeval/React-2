import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

const TextFiled = () => {
  const [Name, setName] = useState();
  const [Email, setEmail] = useState();
  const [data, setdata] = useState([]);

  const addData = () => {
    setdata([...data,{ Name, Email }]);
    setName("");
    setEmail("");
  };

  const Removeitem = (index) =>{
      let arr = data;
      arr.splice(index ,1)
      setdata([...arr])
  }
  return (
    <div>
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
        <Button onClick={addData} variant="contained" color="success">
          Add
        </Button>
      </div>

      <div className="bg-gray-200  w-[50em] mx-auto rounded-xl  ">
        <div className="flex mt-4  justify-between mx-3 items-center py-2 ">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Rmove</h4>
        </div>
      </div>

      {data.map((ele, i) => {
        return (
          <div
            key={i}
            className="flex justify-between mt-3 items-center py-2  bg-gray-200  w-[50em] mx-auto rounded-xl  "
          >
            <h4 className="mx-2">{ele.Name}</h4>
            <h4 className="mx-2">{ele.Email}</h4>

            <Button onClick={(index) => Removeitem(index)} variant="outlined" color="error">
              <DeleteIcon />
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default TextFiled;
