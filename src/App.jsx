import { createRoot } from "react-dom/client";
import NewGameMenu from "./NewGameMenu";
import Game from "./Game";

const App = () => {
    return (
        <div>
          {/* <NewGameMenu /> */}
          <Game />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)