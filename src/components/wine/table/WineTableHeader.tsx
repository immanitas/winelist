import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from "react";
import WineTableHeaderCell from "./WineTableHeaderCell";
import AddIcon from '@mui/icons-material/Add'
import { IconButton, Link } from '@mui/material';
import { LinkBehavior } from '../../link/LinkBehavior';

export default class WineTableHeader extends React.PureComponent {

  tableCells: (string | React.ReactNode)[] = [
    "Wine", "Age", "Rating", (
      <LinkBehavior aria-label="add new wine" href={'/wines/add'}>
        <IconButton sx={{ color: 'inherit' }}><AddIcon /></IconButton>
      </LinkBehavior>
    )
  ]

  render() {
    const items = this.tableCells.map((txt, idx) => {
      return <WineTableHeaderCell
        key={idx}
        label={txt}
      />
    })

    return (
      <TableHead sx={{
        '& th:first-child': {
          borderTopLeftRadius: theme => theme.spacing(1)
        },
        '& th:last-child': {
          borderTopRightRadius: theme => theme.spacing(1)
        }
      }} data-testid="header">
        <TableRow>
          {items}
        </TableRow>
      </TableHead>
    )
  }
}