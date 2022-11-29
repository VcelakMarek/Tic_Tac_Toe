import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OptionProvider from "./Option.context";
import NewGameMenu from "./NewGameMenu";
import Game from "./Game";

const App = () => {
    return (
        <BrowserRouter>
            <OptionProvider>
                <Routes>
                    <Route path="/" element={<NewGameMenu />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </OptionProvider>
        </BrowserRouter>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)