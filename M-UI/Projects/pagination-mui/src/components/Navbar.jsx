import styled from "@emotion/styled";
import { Search, Person, Menu } from "@mui/icons-material";
import { Badge } from "@mui/material";
import {
  AppBar,
  Box,
  Checkbox,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function Navbar() {
  // Styled components
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 0,
    paddingRight: 0,
  });

  const SearchBar = styled(Box)(({ theme }) => ({
    backgroundColor: "#f5f5f5",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    padding: "2px 10px",
    width: 250,
    maxWidth: 400,
  }));

  const RightIcons = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 20,
  });

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={1}
      sx={{ background: "#fff", color: "#222" }}
    >
      <StyledToolbar>
        {/* Left: Checkbox and Title */}
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 200 }}>
          <Checkbox sx={{ color: "#0441f7ff", p: 0, mr: 1 }} checked />
          <Typography variant="body1" fontWeight={500} color="#071a2cff">
            Material UI
          </Typography>
        </Box>
        {/* Right: Search Bar and Icons */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "auto",
            gap: 2,
          }}
        >
          <SearchBar>
            <Search sx={{ color: "#888", mr: 1 }} />
            <InputBase
              placeholder="Material UI"
              sx={{ width: "100%", fontSize: 15, color: "#222" }}
              inputProps={{ "aria-label": "search" }}
            />
          </SearchBar>
          <RightIcons>
            <Badge badgeContent={2} color="error">
              <Person
                sx={{ fontSize: 26, color: "#071a2cff", cursor: "pointer" }}
              />
            </Badge>
            <Badge badgeContent={3} color="error">
              <Menu
                sx={{ fontSize: 26, color: "#071a2cff", cursor: "pointer" }}
              />
            </Badge>
          </RightIcons>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}
