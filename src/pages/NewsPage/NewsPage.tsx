import { Navbar } from "@/components";
import { Slider } from "./components";
import { NavItem } from "@/models";

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
  return (
    <>
      <Navbar value={navItems}/>
      <Slider />
    </>
  )
};
export default NewsPage;