import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Navbar({ who, data }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openProfile, setOpenProfile] = useState(false);

  const open = Boolean(anchorEl);

  // Open Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close Menu
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Open Profile Card
  const handleOpenProfile = (event) => {
    event.preventDefault(); // Prevents redirection
    setOpenProfile(true);
    handleClose();
  };

  // Close Profile Card
  const handleCloseProfile = () => {
    setOpenProfile(false);
  };

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center sticky top-0 z-10">
      <Link to="/" className="text-2xl font-bold">
        Employee Management System
      </Link>

      {who && (
        <div>
          {/* Profile Icon (Dropdown Trigger) */}
          <AccountCircleRoundedIcon
            className="cursor-pointer"
            fontSize="large"
            onClick={handleClick}
          />

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleOpenProfile}>Profile</MenuItem>
            <MenuItem>
              <Link to={`/${who}/logout`} className="text-red-600 no-underline">
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </div>
      )}

      {/* Profile Card Modal */}
      <Dialog
        open={openProfile}
        onClose={handleCloseProfile}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent className=" bg-white rounded-lg p-4">
          <div className=" flex">
            {/* User Details */}
            <div className="flex flex-col items-center  w-[95%]">
              <span className="text-xl font-bold">
                <AccountCircleRoundedIcon
                  fontSize="large"
                  className="text-blue-700 mb-2"
                />
                {data?.firstName || "User Name"}
                {"   "}
                {data?.lastName || "User Name"}
              </span>
              <span className="text-gray-600">
                <span className="font-bold">My Email: </span>
                {data?.email || "user@example.com"}
              </span>
            </div>

            <span>
              {/* Close Button */}
              <IconButton
                aria-label="close"
                onClick={handleCloseProfile}
                className="bg-black"
              >
                <CloseIcon className="" />
              </IconButton>
            </span>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}

export default Navbar;
