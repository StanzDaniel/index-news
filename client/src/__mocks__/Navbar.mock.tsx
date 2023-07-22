import { NavItem } from "@/models";

const clickMock = jest.fn(() => "function onClick");

export const NavItemsMock: NavItem[] = [{
  title: 'Title 1',
  active: true,
  handlerClick:  clickMock,
},
{
  title: 'Title 2',
  active: false,
  handlerClick: clickMock,
},
{
  title: 'Title 3',
  active: false,
  handlerClick: clickMock,
},
{
  title: 'Title 4',
  active: false,
  handlerClick: clickMock,
},];

jest.mock("@/components/Profile/Profile.tsx", () => ({
  __esModule: true,
  default: () => <div>Mocked Profile Component</div>,
}));

jest.mock("@/components/DropdownMenu/DropdownMenu.tsx", () => ({
  __esModule: true,
  default: () => <div>Mocked DropdownMenu Component</div>,
}));
