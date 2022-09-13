import { WineTableElementProps } from "./WineTableElementProps";

export interface WineTableFooterProps extends WineTableElementProps {
  onPageChange: (page: number) => void;
  onRowsPerPageChange: (rowsPerPage: number) => void;
}