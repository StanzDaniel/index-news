import { useEffect } from "react";

function useClickOutside(ref: any , callback: (param: boolean) => void ){
  const handlerClickOutside = (e: MouseEvent) => {
    if (!ref.current.contains(e.target)) {
      callback(false);
    }
  }

  useEffect( () => {
    document.addEventListener("mousedown", handlerClickOutside)
    
    return () => {
      document.removeEventListener("mousedown", handlerClickOutside)
    }            
  }, []);
};

export default useClickOutside;