import { Paper } from '@mui/material';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import React from 'react';
import WineTableHeader from './WineTableHeader';
import WineTableBody from './WineTableBody';
import WineTableFooter from './WineTableFooter';
import WineTableProps from './WineTableProps';

class WineTable extends React.PureComponent<WineTableProps, {
  page: number,
  rowsPerPage: number
}> {

  state = {
    page: 0,
    rowsPerPage: 10
  }

  render() {
    const { page, rowsPerPage } = this.state;
    const { items } = this.props;

    return (
      <Paper sx={{ mt: 3 }}>
        <TableContainer data-testid="container">
          <Table
            stickyHeader
            data-testid="table"
            aria-labelledby="tableTitle"
          >
            <WineTableHeader />
            <WineTableBody
              items={items}
              page={page}
              rowsPerPage={rowsPerPage}
            />
            <WineTableFooter
              items={items}
              page={page}
              rowsPerPage={rowsPerPage}
              onPageChange={(page) => this.setState({page})}
              onRowsPerPageChange={(rowsPerPage) => this.setState({rowsPerPage})}
            />
          </Table>
        </TableContainer>
      </Paper>
    )
  }
}

export default WineTable;