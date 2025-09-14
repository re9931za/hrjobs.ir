import { Avatar, Box, Button, Drawer, IconButton, Stack } from "@mui/material";

import { menuData } from "./Router";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";

import { SocialMedia } from "./SocialMedia";
import { Logo } from "./Logo";
const DrawerMain = ({ setShowDrawer }) => {
  const [accIndex, setAccIndex] = useState(false);
  const navigate = useNavigate();

  return (
    <Drawer
      open
      onClose={() => setShowDrawer(false)}
      sx={{ borderRadius: 0 }}
      slotProps={{ paper: { sx: { borderRadius: 0 } } }}
    >
      <Box
        sx={{ textAlign: "center", display: "flex", justifyContent: "center" }}
        onClick={() => setShowDrawer(false)}
      >
        <a href="/">
          <img src="assets/icons/logo.png" className="rounded-md h-9" alt="" />
        </a>
      </Box>

      <div className="flex flex-col grow-1 mt-3">
        {menuData.map((menu, index) => (
          <div>
            <hr className="text-gray-300 shadow-2xs" />
            {menu.sub.length === 0 ? (
              <Button
                fullWidth
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
            )}
          </div>
        ))}
      </div>
      <SocialMedia />
    </Drawer>
  );
};

export default DrawerMain;
