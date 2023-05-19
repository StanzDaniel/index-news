import { NavItem } from "@/models";

export const NavItemsMock: NavItem[] = [{
  title: 'Title 1',
  active: true,
  handlerClick: text => console.log(text),
},
{
  title: 'Title 2',
  active: false,
  handlerClick: text => console.log(text),
},
{
  title: 'Title 3',
  active: true,
  handlerClick: text => console.log(text),
},
{
  title: 'Title 4',
  active: true,
  handlerClick: text => console.log(text),
},];

jest.mock("@/components/NavList/NavList.tsx", () => ({
  __esModule: true,
  default: () => <div>Mocked Navlist Component</div>,
}));

jest.mock("@/components/Profile/Profile.tsx", () => ({
  __esModule: true,
  default: () => <div>Mocked Profile Component</div>,
}));

jest.mock("@/components/DropdownMenu/DropdownMenu.tsx", () => ({
  __esModule: true,
  default: () => <div>Mocked DropdownMenu Component</div>,
}));
