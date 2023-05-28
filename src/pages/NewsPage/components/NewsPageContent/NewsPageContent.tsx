import { useEffect, useState } from "react";
import { useNewsPageContext } from "../../context";
import callAPI from "@/services/callAPI.service";

function NewsPageContent({children}: any) {  
  const [isLoadedData, setIsLoadedData ] = useState(false);
  const { setNewsPageContextValue } = useNewsPageContext()

  const fetchData = async () => {
    const response = await callAPI();    
    setNewsPageContextValue(response.data.articles);
    setIsLoadedData(true);
    console.log({REPONSE: response.data.articles});
  };
  
  useEffect(() => {
    setIsLoadedData(false);
    fetchData();
  }, [])
  
  if (!isLoadedData) {
    return (<div>Loading...</div>);
  } else {
    return (
      <>
        {children}
      </>
    )
  }
}

export default NewsPageContent