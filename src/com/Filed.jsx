import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

const Filed = ({ email, name, index }) => {
  return (
    <div>
      <div className="bg-gray-200  w-[50em] mx-auto rounded-xl  ">
        <div className="flex mt-4  justify-between mx-3 items-center py-2 ">
          <h4>{email}</h4>
          <h4>{name}</h4>

          <Button variant="outlined" color="error">
            <DeleteIcon />
          </Button>
        </div>
      </div>
      ;
    </div>
  );
};

export default Filed;
