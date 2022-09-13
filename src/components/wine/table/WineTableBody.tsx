import { IconButton, Link, Rating, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import React from "react";
import ViewIcon from '@mui/icons-material/Visibility';
import { WineTableElementProps } from "./WineTableElementProps";
import { LinkBehavior } from "../../link/LinkBehavior";

export default class WineTableBody extends React.PureComponent<WineTableElementProps> {
  render() {
    const { page, items, rowsPerPage } = this.props;
    return (
      <TableBody>
        {(rowsPerPage > 0 ?
          items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : items)
          .map((row, idx) => {
            return (
              <TableRow hover key={row.id}>
                <TableCell><Typography noWrap>{`${row.name} - ${row.winery}`}</Typography></TableCell>
                <TableCell padding="checkbox"><Typography noWrap>{row.year}</Typography></TableCell>
                <TableCell sx={{ paddingTop: "3px" }} padding="checkbox">
                  <Rating name="read-only" size="small" value={row.rating} readOnly />
                </TableCell>
                <TableCell sx={{ textAlign: "center" }} padding="checkbox">
                  <LinkBehavior href={`/wines/${row.id}`}>
                    <IconButton aria-label="view">
                      <ViewIcon></ViewIcon>
                    </IconButton>
                  </LinkBehavior>
                </TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    )
  }
}