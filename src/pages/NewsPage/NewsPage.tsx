import { Cards, NewsPageContent, Slider } from "./components";
import { NavbarNewsPage } from "./components/NavbarNewsPage";
import { NewsPageProvider } from "./context";

function NewsPage() {
  
  return (
    <NewsPageProvider>
      <NavbarNewsPage/>
      <NewsPageContent>
        <Slider />
        <Cards />
      </NewsPageContent>
    </NewsPageProvider>
  );
};
export default NewsPage;