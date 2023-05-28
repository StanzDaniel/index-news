import { Navbar } from "@/components";
import { NavItem } from "@/models";
import { Cards, NewsPageContent, Slider } from "./components";
import { NewsPageProvider } from "./context";

const navItems: NavItem[] = [
  {
    title: 'Top News',
    active: true,
    handlerClick: text => console.log(text),
  },
  {
    title: 'finanzas',
    active: false,
    handlerClick: text => console.log(text),
  },
  {
    title: 'tecnologia',
    active: false,
    handlerClick: text => console.log(text),
  },
  {
    title: 'salud',
    active: false,
    handlerClick: text => console.log(text),
  },
  {
    title: 'ciencia',
    active: false,
    handlerClick: text => console.log(text),
  },
];




function NewsPage() {
  const isMobile: boolean = window.innerWidth < 768;
  
  
  return (
    <NewsPageProvider>
      <Navbar value={navItems} isMobile={isMobile} />
      <NewsPageContent>
        <Slider />
        <Cards />
      </NewsPageContent>
    </NewsPageProvider>
  );
};
export default NewsPage;