import { createContext, useState } from "react";

export const vsCpuContext = createContext("");

const VsCpuProvider = ({ children }) => {
  const [vsCPU, setVsCPU] = useState();

  return (
    <vsCpuContext.Provider value={[vsCPU, setVsCPU]}>
      {children}
    </vsCpuContext.Provider>
  );
};

export default VsCpuProvider;
