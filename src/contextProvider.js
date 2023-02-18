import { createContext, useState } from "react";

const Context = createContext();

export function ContextProvider(props) {
    const [language, setLanguage] = useState("it");
  
    return (
      <Context.Provider value={{ language, setLanguage }}>
        {props.children}
      </Context.Provider>
    );
  }
  
  export default Context;