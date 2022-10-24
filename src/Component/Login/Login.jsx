import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Tab,
  Tabs,
  AppBar,
  Button,
  Paper,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
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
                <TextField
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                />
              </Stack>
              <Stack mb={2}>
                <TextField
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type={"password"}
                />
              </Stack>
              <Stack my={2}>
                <Button variant="contained">Login</Button>
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
