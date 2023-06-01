import { REQUEST_ADAPTER } from "@/adapters";
import { NavItem, NavList, Navbar } from "@/components";
import { sharingInfoNavItems, sharingInfoSearchNews } from "@/services";
import { useState } from "react";

const searchNewsSubmit = (value: string) => {
  sharingInfoSearchNews.setSubject(value);
}

function NavbarNewsPage() {
  const [activeLink, setActiveLink] = useState("general");
  
  const handleCategories = (text: string) => {
    sharingInfoNavItems.setSubject(text);
    setActiveLink(text);
  }

  return (
    <Navbar>
      <NavList submitSearchInput={searchNewsSubmit}>
        <NavItem className={`nav-item ${activeLink === REQUEST_ADAPTER.TOPNEWS && 'active'}`} click={handleCategories} value={REQUEST_ADAPTER.TOPNEWS}>{'topnews'}</NavItem>
        <NavItem className={`nav-item ${activeLink === REQUEST_ADAPTER.BUSINESS && 'active'}`} click={handleCategories} value={REQUEST_ADAPTER.BUSINESS}>{'business'}</NavItem>
        <NavItem className={`nav-item ${activeLink === REQUEST_ADAPTER.ENTERTAINMENT && 'active'}`} click={handleCategories} value={REQUEST_ADAPTER.ENTERTAINMENT}>{'entertainment'}</NavItem>
        <NavItem className={`nav-item ${activeLink === REQUEST_ADAPTER.SCIENCE && 'active'}`} click={handleCategories} value={REQUEST_ADAPTER.SCIENCE}>{'science'}</NavItem>
        <NavItem className={`nav-item ${activeLink === REQUEST_ADAPTER.HEALTH && 'active'}`} click={handleCategories} value={REQUEST_ADAPTER.HEALTH}>{'health'}</NavItem>
        <NavItem className={`nav-item ${activeLink === REQUEST_ADAPTER.SPORTS && 'active'}`} click={handleCategories} value={REQUEST_ADAPTER.SPORTS}>{'sports'}</NavItem>
        <NavItem className={`nav-item ${activeLink === REQUEST_ADAPTER.TECHNOLOGY && 'active'}`} click={handleCategories} value={REQUEST_ADAPTER.TECHNOLOGY}>{'technology'}</NavItem>
      </NavList>
    </Navbar>
  )
}
export default NavbarNewsPage