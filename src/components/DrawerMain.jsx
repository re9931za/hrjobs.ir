import { Avatar, Box, Button, Drawer, IconButton, Stack } from "@mui/material";

import { menuData } from "./Router";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import { SocialMedia } from "./SocialMedia";
const DrawerMain = ({ setShowDrawer }) => {
  const [accIndex, setAccIndex] = useState(false);
  const navigate = useNavigate();

  return (
    <Drawer open onClose={() => setShowDrawer(false)}>
      <Box sx={{ textAlign: "center", display: "flex" }}>
        <IconButton onClick={() => setShowDrawer(false)}>
          <Link to="/">
            <Avatar src="assets/icons/logo.png"></Avatar>
          </Link>
        </IconButton>
        <b className="text-xs self-center">
          <div className="grid">
            <p>توسعه سرمایه</p>
            <p>انسانی شمال</p>
          </div>
        </b>
      </Box>

      <div className="flex flex-col grow-1">
        {menuData.map((menu, index) =>
          menu.sub.length === 0 ? (
            <Button
              sx={{ justifyContent: "start" }}
              onClick={() => {
                navigate(menu.path);
                setShowDrawer(false);
              }}
            >
              {menu.caption}
            </Button>
          ) : (
            <div>
              <Button
                fullWidth
                onClick={() =>
                  index === accIndex ? setAccIndex(false) : setAccIndex(index)
                }
              >
                <div className="w-full flex justify-between">
                  {menu.caption}
                  {index === accIndex ? (
                    <KeyboardArrowUp />
                  ) : (
                    <KeyboardArrowDown />
                  )}
                </div>
              </Button>
              {index === accIndex && (
                <Stack>
                  {menu.sub.map((item, i) => (
                    <Button
                      sx={{ justifyContent: "start", pl: 3 }}
                      key={i}
                      onClick={() => {
                        navigate(item.path);
                        setShowDrawer(false);
                      }}
                    >
                      {item.caption}
                    </Button>
                  ))}
                </Stack>
              )}
            </div>
          )
        )}
      </div>
      <SocialMedia />
    </Drawer>
  );
};

export default DrawerMain;
