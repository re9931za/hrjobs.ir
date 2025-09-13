import { useContext, useState } from "react";
import { menuData } from "./Router";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Paper,
  Icon,
  Container,
} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { BlurLinear, KeyboardArrowDown } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DrawerMain from "./DrawerMain";
import { DarkMode } from "../App";
import { red } from "@mui/material/colors";
const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showDrawer, setShowDrawer] = useState(false);
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(DarkMode);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={(theme) => ({
        p: 0,
        borderRadius: 0,
        backgroundColor: "transparent",
        backdropFilter: "blur(8px)",
        ":hover": { backgroundColor: theme.palette.background.paper },
      })}
    >
      <Container>
        <Toolbar className="!p-0 !m-0">
          {/* logo HR */}
          <Box sx={{ flexGrow: { sm: 0 } }}>
            <IconButton>
              <Link to="/">
                <Avatar src="/assets/icons/logo.png"></Avatar>
              </Link>
            </IconButton>
          </Box>
          <b className="text-xs sm:hidden grow">
            <div className="grid">
              <p>توسعه سرمایه</p>
              <p>انسانی شمال</p>
            </div>
          </b>
          {/* menus */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, flexGrow: 1 }}>
            {menuData.map((menu, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{ position: "relative" }}
              >
                {menu.sub.length === 0 ? (
                  <Button onClick={() => navigate(menu.path)}>
                    {menu.caption}
                  </Button>
                ) : (
                  <Button
                    endIcon={<KeyboardArrowDown />}
                    onClick={() => navigate(menu.path)}
                  >
                    {menu.caption}
                  </Button>
                )}
                {activeIndex === index && (
                  <div style={{ position: "absolute" }}>
                    <Paper sx={{ p: 0, borderRadius: 1 }}>
                      {menu.sub.map((item, sindex) => (
                        <MenuItem
                          key={sindex}
                          onClose={() => setActiveIndex(null)}
                          onClick={() => {
                            setActiveIndex(null);
                            navigate(item.path);
                          }}
                        >
                          {item.caption}
                        </MenuItem>
                      ))}
                    </Paper>
                  </div>
                )}
              </div>
            ))}
          </Box>
          {/* drawer */}
          <IconButton
            sx={{ display: { sm: "none" } }}
            onClick={() => setShowDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          {showDrawer && <DrawerMain setShowDrawer={setShowDrawer} />}
          {/* light mode */}
          <IconButton>
            {darkMode === "light" ? (
              <LightModeIcon
                onClick={() => {
                  localStorage.setItem("darkMode", "dark");
                  setDarkMode("dark");
                }}
              />
            ) : (
              <NightsStayIcon
                onClick={() => {
                  localStorage.setItem("darkMode", "light");
                  setDarkMode("light");
                }}
              />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
