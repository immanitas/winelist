import { Box, Toolbar } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import React from 'react';
import { HeaderProps } from './HeaderProps';
import HeaderTitle from './HeaderTitle';
import SearchBar from './SearchBar';


class Header extends React.PureComponent<HeaderProps> {
  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar>
            <HeaderTitle />
            {this.props.enableSearch ? <SearchBar onChange={this.props.onChange} /> : null}
          </Toolbar>
        </AppBar>
      </Box>
    )
  }

}

export default Header;