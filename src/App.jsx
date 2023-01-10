import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OptionProvider from "./Option.context";
import VsCpuProvider from "./vsCpu.context";
import NewGameMenu from "./NewGameMenu";
import Game from "./Game";

const App = () => {
  return (
    <BrowserRouter>
      <OptionProvider>
        <VsCpuProvider>
          <Routes>
            <Route path="/Tic_Tac_Toe" element={<NewGameMenu />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </VsCpuProvider>
      </OptionProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
