import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

const buttonStyle = {
  margin: "2% auto",
  width: "50%",
};
const AddTask = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <Box>
      {" "}
      <Stack style={buttonStyle}>
        <Button onClick={handleClick}>
          <Typography fontSize={12} fontWeight={600}>
            {" "}
            Add Task
          </Typography>
          <AddIcon />
        </Button>
      </Stack>
    </Box>
  );
};

export default AddTask;
