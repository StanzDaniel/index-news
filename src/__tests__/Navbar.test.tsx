import { NavItemsMock } from "@/__mocks__/Navbar.mock";
import { Navbar } from "@/components";
import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';

describe("Navbar Component", () => {

  afterEach(() => {
    jest.resetAllMocks();
  })

  test("should render correctly on a desktop screen", () => {
    render(<Navbar value={NavItemsMock} />)
    //render Logo image
    expect(screen.getByAltText("logotype")).toBeInTheDocument();
    //render NavList
    expect(screen.getByText("Mocked Navlist Component")).toBeInTheDocument();
    //render Profile
    expect(screen.getByText("Mocked Profile Component")).toBeInTheDocument();
    screen.debug();
  })

  test("should render correctly on a mobile device", async () => {
    //render it with isMobile property;
    render(<Navbar value={NavItemsMock} isMobile={true} />);
    //render Logo image
    expect(screen.getByAltText("logotype")).toBeInTheDocument();

    const hamburguerMenu = screen.getByRole("toggleDropdown");
    //check if dropdown is not visible
    expect(screen.queryByText("Mocked DropdownMenu Component")).not.toBeInTheDocument();
    
    await user.click(hamburguerMenu);
    //render dropdown after clicking
    expect(screen.getByText("Mocked DropdownMenu Component")).toBeInTheDocument();

    screen.debug();
  })
})