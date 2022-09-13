import WineListItem from "../WineListItem";

export interface WineTableElementProps {
  rowsPerPage: number;
  page: number;
  items: WineListItem[];
}
