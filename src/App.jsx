import { createRoot } from "react-dom/client";
import OptionProvider from "./Option.context";
import NewGameMenu from "./NewGameMenu";
import Game from "./Game";

const App = () => {
    return (
        <OptionProvider>
            <div>
               <NewGameMenu /> 
              {/* <Game />*/}
            </div>

        </OptionProvider>

    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)