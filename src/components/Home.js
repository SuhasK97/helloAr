import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import Products from "./Screens/Products";
import Demos from "./Screens/Demos";
import Customers from "./Screens/Customers";
import SalesTeam from "./Screens/SalesTeam";
import Settings from "./Screens/Settings";
import DemoScript from "./Screens/DemoScript";
import { Avatar, Grid } from "@mui/material";
import './../App.css';

const drawerWidth = 240;

export default function ClippedDrawer() {
  const [indexNo, setindexNo] = useState("");
  const renderComp = () => {
    if (indexNo === 0) return <Products />;
    else if (indexNo === 1) return <DemoScript />;
    else if (indexNo === 2) return <Customers />;
    else if (indexNo === 3) return <SalesTeam />;
    else if (indexNo === 4) return <Demos />;
    else return <Settings />;
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, bgcolor: "white" }}
      >
        <Toolbar className="d-flex justify-content-between">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ color: "black" }}
          >
            MY APPLICATION
          </Typography>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {[
              "Products",
              "Demo Script",
              "Customers",
              "Sales Team",
              "Demos",
              "Settings",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemText

                    primary={text}
                    onClick={() => setindexNo(index)}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {renderComp()}
      </Box>
    </Box>
  );
}
