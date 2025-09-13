import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import products from "../../data/products.json";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: "350px",
        borderRadius: "10px",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: "200px",
        }}
      >
        {products.map((item, index) => (
          <Tab label={item[0]} {...a11yProps(index)} className="!text-right" />
        ))}
      </Tabs>
      {products.map((item, index) => (
        <div>
          <TabPanel value={value} index={index}>
            <div className="grid grid-cols-[2fr_1fr] gap-10 place-content-center">
              <div className=" flex flex-col text-start ">
                <p className="font-bold my-3">{item[0]}</p>
                <p className="grow">{item[1]}</p>
                <Button
                  endIcon={<ArrowBackIcon />}
                  variant="contained"
                  className="self-end !text-xs !mt-5"
                >
                  توضیح بیشتر
                </Button>
              </div>
              <img
                src={`../../../public/assets/home/product (${index + 1}).svg`}
                alt=""
                className="size-[200px] place-self-center object-contain"
              />
            </div>
          </TabPanel>
        </div>
      ))}
    </Box>
  );
}
