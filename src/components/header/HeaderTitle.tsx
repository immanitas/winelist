import { Typography } from "@mui/material";

export default function HeaderTitle() {
  return (
    <Typography
      variant="h6"
      noWrap
      component="span"
      sx={{ flexGrow: 1, display: { sm: 'block' } }}
    >
      Wine List
    </Typography>
  )
}