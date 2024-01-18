import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUserData } from 'redux/auth/selectors';

import { Wrapper, UserText, UserName } from './UserMenu.styled';
import { logoutThunk } from 'redux/auth/operations';
import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';

export const UserMenu = () => {
  const user = useSelector(selectAuthUserData);
  const dispatch = useDispatch();

  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ['Logout'];

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
    console.log(user.avatar);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Wrapper>
      <UserText>
        Welcome, <UserName>{user.name}</UserName>
      </UserText>

      <Box sx={{ flexGrow: 0 }}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user.name} src={user.avatar} />
        </IconButton>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map(setting => (
            <MenuItem key={setting} onClick={() => dispatch(logoutThunk())}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </Wrapper>
  );
};
