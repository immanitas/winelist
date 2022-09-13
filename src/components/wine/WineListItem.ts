export default interface WineListItem {
  id: string;
  image: string;
  type: string;
  name: string;
  winery: string;
  location: string;
  rating: number;
  alcoholPercentage: number;
  year: number;
  size: string | number;
  description: string;
  source: string;
} 