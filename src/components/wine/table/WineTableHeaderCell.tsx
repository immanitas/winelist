import { TableCell } from "@mui/material";
import React from "react";
import WineTableHeaderCellProps from "./WineTableHeaderCellProps";

export default class WineTableHeaderCell extends React.PureComponent<WineTableHeaderCellProps, {}> {
  render() {
    return (
      <TableCell
        variant="head"
        sx={{
          backgroundColor: theme => theme.palette.primary.light,
          color: theme => theme.palette.common.white,
          fontWeight: theme => theme.typography.fontWeightMedium,
          textAlign: this.props.textAlignCenter ? "center" : "left"
        }}>
        {this.props.label}
      </TableCell>
    )
  }
}