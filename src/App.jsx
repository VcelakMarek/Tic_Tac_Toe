import { createRoot } from "react-dom/client";
import NewGameMenu from "./NewGameMenu";

const App = () => {
    return (
        <div>
            <NewGameMenu />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)