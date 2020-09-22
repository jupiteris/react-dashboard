import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Menu,
  MenuItem,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  avatar: {
    height: 32,
    width: 32,
    marginRight: theme.spacing(1)
  },
  popover: {
    width: 200
  }
}));

function Account() {
  const classes = useStyles();
  const ref = useRef(null);
  const account = useSelector(state => state.account);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        component={ButtonBase}
        onClick={handleOpen}
        ref={ref}
      >
        <Avatar
          alt="User"
          className={classes.avatar}
          src={account.user.avatar}
        />
        <Hidden smDown>
          <Typography variant="h6" color="inherit">
            {`${account.user.firstName} ${account.user.lastName}`}
          </Typography>
        </Hidden>
      </Box>
      <Menu
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        keepMounted
        PaperProps={{ className: classes.popover }}
        getContentAnchorEl={null}
        anchorEl={ref.current}
        open={isOpen}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>Account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default Account;
