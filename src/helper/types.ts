export interface DefType {
  name: string;
  daysSinceLastTime: number;
  date: string;
  color: string;
}
export interface GroupProps {
  data: DefType;
  onClick?: () => void;
}
export interface sortButtonType {
  name: string;
  sortField: string;
}