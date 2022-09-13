import SearchIcon from "@mui/icons-material/Search";
import { Box, InputBase } from "@mui/material";
import { alpha } from "@mui/system";
import React from "react";
import { SearchBarProps } from "./SearchBarProps";

class SearchBar extends React.PureComponent<SearchBarProps> {
  
  render() {
    return (
      <Box sx={{
        position: 'relative',
        color: 'inherit',
        marginLeft: { xs: 0, sm: 1 },
        width: { xs: '200px', sm: '250px' },
        borderRadius: theme => theme.shape.borderRadius,
        backgroundColor: alpha("#FFFFFF", 0.25),
        '&:hover': {
          backgroundColor: alpha("#FFF", 0.30),
        },
        flexDirection: 'column'
      }}
      >
        <Box sx={{
          display: "flex",
          position: "absolute",
          pointerEvents: "none",
          alignItems: "center",
          py: 0,
          px: 2,
          height: "100%"
        }}>
          <SearchIcon aria-label="Search Icon" />
        </Box>
        <InputBase
          aria-label="Search"
          placeholder="Search"
          onChange={this.props.onChange}
          sx={{
            color: 'inherit',
            pl: theme => `calc(1em + ${theme.spacing(4)})`,
            py: {xs: 0, sm: 0.5},
          }} />
      </Box >
    )
  }
}

export default SearchBar;

