import { NavItemsMock } from "@/__mocks__/Navbar.mock";
import { Navbar } from "@/components";
import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';

describe("Navbar Component", () => {
  beforeEach(() => {
    jest.mock("@/components/NavList/NavList.tsx", () => ({
      __esModule: true,
      default: () => <div>Mocked Navlist Component</div>,
    }));
  })

  afterEach(() => {
    jest.resetAllMocks();
  })

  test("should render correctly on a desktop screen", () => {
    render(<Navbar value={NavItemsMock} />);

    expect(screen.getByAltText("logotype")).toBeInTheDocument();
    //is Navlist to be in the DOM
    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Mocked Profile Component")).toBeInTheDocument();
    
  })

  test("should render correctly on a mobile device", async () => {
    render(<Navbar value={NavItemsMock} isMobile={true} />);

    expect(screen.getByAltText("logotype")).toBeInTheDocument();

    const hamburguerMenu = screen.getByRole("toggleDropdown");
    expect(screen.queryByText("Mocked DropdownMenu Component")).not.toBeInTheDocument();

    await user.click(hamburguerMenu);
    expect(screen.getByText("Mocked DropdownMenu Component")).toBeInTheDocument();
  })
})