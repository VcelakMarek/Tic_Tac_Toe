import { createContext, useState } from "react";

export const OptionContext = createContext("")

const OptionProvider = ({children}) => {
  const [option, setOption] = useState("X")

  return (
    <OptionContext.Provider value={[option, setOption]} >
      {children}
    </OptionContext.Provider>
  )
}

export default OptionProvider;