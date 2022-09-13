import { TableFooter, TablePagination, TableRow } from "@mui/material";
import React from "react";
import { TablePaginationActions } from "./TablePaginationActions";
import { WineTableFooterProps } from "./WineTableFooterProps";

export default class WineTableFooter extends React.PureComponent<WineTableFooterProps> {
  render() {
    const {
      items, page, rowsPerPage,
      onPageChange, onRowsPerPageChange
    } = this.props;

    return (
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50, { label: 'All', value: -1 }]}
            colSpan={3}
            count={items.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                'aria-label': 'rows per page',
              },
              native: true,
            }}
            onPageChange={(event, page) => onPageChange(page)}
            onRowsPerPageChange={(event) => onRowsPerPageChange(parseInt(event.target.value, 10))}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    )
  }
}
