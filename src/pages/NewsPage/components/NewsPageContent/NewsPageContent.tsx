import { useEffect, useState } from "react";
import { useNewsPageContext } from "../../context";
import { sharingInfoNavItems, sharingInfoSearchNews } from "@/services";
import { searchNewsFetch, topNewsFetch } from "../../services";
import { LoadingSpinner } from "@/components";

function NewsPageContent({children}: any) {  
  const [isLoadedData, setIsLoadedData ] = useState(false);
  const newsPageContext = useNewsPageContext()

  const NavItemsSubscription$ = sharingInfoNavItems.getSubject();
  const SearchNewsSubscription$ = sharingInfoSearchNews.getSubject();


  const fetchData = async (value: {}) => {
    setIsLoadedData(false);
    const response = await topNewsFetch(value);    
    newsPageContext.setContextValue(response.data.articles);
    setIsLoadedData(true);
  }; 

  const searchNews = async (value: {}) => {
    setIsLoadedData(false);
    const response = await searchNewsFetch(value);    
    newsPageContext.setContextValue(response.data.articles);
    setIsLoadedData(true);
  };
  
  useEffect(() => {
    setIsLoadedData(false);
    NavItemsSubscription$.subscribe(data => data ? fetchData(data) : null)
    SearchNewsSubscription$.subscribe(data => data ? searchNews(data) : null)
    fetchData("general");
  }, [])
  
  if (!isLoadedData) {
    return (<LoadingSpinner />);
  } else {
    return (
      <>
        {children}
      </>
    )
  }
}

export default NewsPageContent