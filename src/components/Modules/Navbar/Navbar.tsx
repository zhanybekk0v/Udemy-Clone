import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import "./Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContextProvider";
import { Badge } from "@mui/material";

const pages = ["Udemy Buisiness", "Продавайте на Udemy", "Blog"];
const settings = ["Profile", "Account", "Dashboard"];

const Navbar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const { refreshToken, nickName, logOut } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (localStorage.getItem('tokens')) {
      refreshToken()
    }
  }, [])

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" style={{ background: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
              fontSize: '28px'
            }}
          >
            udemy
          </Typography>
          <div>
            <input style={{width: '60vmin', border:'2px solid black', borderRadius:'20px', padding:'10px 0', textAlign:'center', fontSize:'16px'}} type="text" placeholder='Ищите что угодно........' />
          </div>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Link to='/cart'>
        <MenuItem >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="default"

          >
            <Badge  color='warning' >
            <LocalGroceryStoreIcon />
            </Badge>
          </IconButton>
          {/* <p>Cart</p> */}
        </MenuItem>
      </Link>

          {nickName ? (
            <>
              <Typography sx={{color:"black", border:"1px solid black", padding:'5px 10px'}}>ADMIN</Typography>
              <Box sx={{ flexGrow: 0, marginLeft: "15px" }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                    sx={{fontSize:"25px", textAlign:'center', backgroundColor:"black"}}
                      alt={nickName}
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                  <MenuItem key={"logout"} >
                    <Typography textAlign="center"
                    onClick={logOut}
                      sx={{ fontSize: "0.875rem", color: "black", fontWeight: 700 }}
                    >Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <div className="navbar__auth">
              <Button onClick={() => navigate("/choose-status-login")}>
                <Typography
                  sx={{ fontSize: "0.875rem", color: "black", fontWeight: 700, border: '1px solid black', padding: '7px 14px' }}
                >
                  LOG IN
                </Typography>
              </Button>
              <Button onClick={() => navigate("/choose-status-register")}>
                <Typography
                  sx={{ fontSize: "0.875rem", color: "white", fontWeight: 700, border: '1px solid white', padding: '7px 14px', backgroundColor:'black', }}
                >
                  SIGN UP
                </Typography>
              </Button>
            </div>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
