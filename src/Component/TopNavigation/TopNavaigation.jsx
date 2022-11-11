import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  MenuItem,
  Menu,
  Drawer,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Badge,
  Avatar,
} from "@mui/material/";
import {
  AccountCircle,
  Notifications,
  CachedOutlined,
  Menu as MenuIcon,
  School,
  FestivalOutlined,
  Login,
  Info,
  Home,
  Forum,
  BookOnline,
  LoginOutlined,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";
import TestContext from "../../State/Test/TestContext";
import UseEffect from "../../State/UseEffect/UseEffectContext";
import UseContext from "../../State/UseState/UseContext";
import MaterialContext from "../../State/Material/MaterialContext";

const TopNavaigation = () => {
  const { location } = React.useContext(UseEffect);

  const { toggleDrawer, state } = React.useContext(TestContext);

  const { handleLogout } = React.useContext(MaterialContext);

  const { user, setAppLoading } = React.useContext(UseContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = (string) => {
    setAnchorEl(null);
    if (string === "logout") {
      handleLogout();
      setAppLoading({ load: true, color: "blue" });
    }

    setTimeout(() => {
      setAppLoading({ load: false, color: "red" });
    }, 1000);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {location.pathname !== "/" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary={"Home"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/about" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/about"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText primary={"About College"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/process" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/process"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <CachedOutlined />
                </ListItemIcon>
                <ListItemText primary={"College Admission Process"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
        {location.pathname !== "/fest" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/fest"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <FestivalOutlined />
                </ListItemIcon>
                <ListItemText primary={"College Upcomming"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
      </List>
      <Divider />
      <List>
        {location.pathname !== "/collegeMaterials" ? (
          <ListItem onClick={toggleDrawer(false)}>
            <Link to={"/collegeMaterials"}>
              <ListItemButton onClick={toggleDrawer(false)}>
                <ListItemIcon>
                  <BookOnline />
                </ListItemIcon>
                <ListItemText primary={"College Materials"} />
              </ListItemButton>
            </Link>
          </ListItem>
        ) : (
          ""
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Drawer anchor={"top"} open={state} onClose={toggleDrawer(false)}>
        {list("top")}
      </Drawer>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Sushila Shakarao Mahavidyalaya{" "}
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              onClick={handleClick}
            >
              <Badge badgeContent={17} color="error">
                {user.status !== null ? (
                  <Avatar
                    imgProps={{ loading: "lazy" }}
                    src={user.avatar}
                    alt={user.name}
                    sx={{ width: 40, height: 40 }}
                  />
                ) : (
                  <AccountCircle />
                )}
              </Badge>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to={"/profile"}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    {user.avatar !== null ? (
                      <Avatar
                        imgProps={{ loading: "lazy" }}
                        src={user.avatar}
                        sx={{ width: 24, height: 24 }}
                      />
                    ) : (
                      <AccountCircle />
                    )}
                  </ListItemIcon>
                  Profile
                </MenuItem>
              </Link>
              <Link to={"/notification"}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Badge badgeContent={17} color="error">
                      <Notifications />
                    </Badge>
                  </ListItemIcon>
                  Notifications
                </MenuItem>
              </Link>
              <Link to={"/chat"}>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Badge color="error">
                      <Forum />
                    </Badge>
                  </ListItemIcon>
                  chat
                </MenuItem>
              </Link>
              {user.name === null ? (
                <Link to={"/login"}>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <LoginOutlined />
                    </ListItemIcon>
                    Login
                  </MenuItem>
                </Link>
              ) : (
                <MenuItem onClick={() => handleClose("logout")}>
                  <ListItemIcon>
                    <LoginOutlined />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              )}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopNavaigation;
