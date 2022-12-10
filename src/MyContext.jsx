import { createContext, useState } from "react";

export const MyContext = createContext("");

const MyProvider = (props) => {
  const [displayX, setDisplayX] = useState("invisible");
  const [displayO, setDisplayO] = useState("invisible");

  return (
    <MyContext.Provider
      value={{
        displayX: [displayX, setDisplayX],
        displayO: [displayO, setDisplayO],
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
