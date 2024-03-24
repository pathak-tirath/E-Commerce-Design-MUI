import React from "react";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightSideBar from "./components/RightSideBar";
import { Box, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
const App = () => {
  return (
    <Box>
      <NavBar />
      <Stack direction={"row"} spacing={2} justifyContent={'space-between'}>
        <SideBar />
        <Feed />
        <RightSideBar />
      </Stack>
    </Box>
  );
};

export default App;
