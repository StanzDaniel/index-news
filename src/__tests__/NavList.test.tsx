import { NavItemsMock } from "@/__mocks__/Navbar.mock";
import { NavList } from "@/components";
import { NavbarContext } from "@/components/Navbar/Navbar";
import { render, screen } from "@testing-library/react";

describe("NavList", () => {
  beforeAll(() => jest.deepUnmock("@/components/NavList/NavList.tsx"))
  beforeEach(() => {
    render(
      <NavbarContext.Provider value={NavItemsMock}>
        <NavList />
      </NavbarContext.Provider>
    );
    screen.debug();
  })

  test("should render a search input", () => {
    expect(screen.getByPlaceholderText("search")).toBeInTheDocument();
  })

  test("should render a list with elements in a array", () => {
    expect(screen.getAllByText(/Title \d/)).toHaveLength(NavItemsMock.length);
  })

})