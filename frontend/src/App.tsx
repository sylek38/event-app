import "./App.css";
import { ExampleComponent } from "./ExampleComponent";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ExampleComponent>Children</ExampleComponent>
            </header>
        </div>
    );
}

export default App;
