export interface NavItem {
  title: string,
  active: boolean,
  handlerClick: (params: string) => void
};