import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import "./App.css";
import PropsPract from "./components/PropsPract";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header />
        <PropsPract name="Aakifah " message="Complete task" />
        <PropsPract name="Jahangir " message="Complete task-2" />
        <PropsPract name="Ahmad " message="Complete task-5" />
        <PropsPract name="Najma " message="Complete task-4" />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 2)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
