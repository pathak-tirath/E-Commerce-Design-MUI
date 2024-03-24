import React from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge
} from "@mui/material";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
 
}));
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const NavBar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          E-Commerce
        </Typography>
        <LocalGroceryStoreIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." sx={{ width: "100%" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
