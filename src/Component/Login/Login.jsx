import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import { GoogleLogin } from "@react-oauth/google";
import {
  Box,
  Stack,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Paper,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { useContext } from "react";
import MaterialContext from "../../State/Material/MaterialContext";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={"div"}>{children}</Typography>
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const { handleFailure, handleLogin } = useContext(MaterialContext);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const [animals, setAnimals] = React.useState([
    { type: ["Lion"] },
    { type: ["Rabbit"] },
    { type: ["Wolf"] },
  ]);
  console.log(animals);
  const handleArray = () => {
    animals[animals.length - 1].type.push("naresh");
    setAnimals([...animals]);
  };

  return (
    <Stack
      sx={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        m={12}
        sx={{
          bgcolor: "background.paper",
          borderRadius: 2,
        }}
      >
        <AppBar position="static">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Login as newbie" {...a11yProps(0)} />
            <Tab disabled label="Login as Teacher" {...a11yProps(1)} />
            <Tab disabled label="Login as Student" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Paper
              elevation={10}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: 4,
              }}
            >
              <Stack>
                <AccountCircle fontSize={"large"} />
              </Stack>
              <Stack mb={2}>
                <Stack sx={{ margin: 2 }}>
                  <GoogleLogin
                    size="large"
                    type="icon"
                    shape="square"
                    width="400"
                    theme="filled"
                    auto_select="true"
                    onSuccess={handleLogin}
                    useOneTap={true}
                    onError={handleFailure}
                    logo_alignment={"left"}
                    context={"signin"}
                  />
                </Stack>
              </Stack>
              <Stack my={2}>
                <Button onClick={handleArray} variant="contained">
                  Login
                </Button>
              </Stack>
            </Paper>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            Login as Teacher
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            Login as newbie
          </TabPanel>
        </SwipeableViews>
      </Box>
    </Stack>
  );
}
