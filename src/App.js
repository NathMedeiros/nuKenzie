import Index from "./components/HomePage/index";
import { useState } from "react";
import IndexHome from "./components/PageFinance/index";
import "./App.css";
import "./components/PageFinance/finance.css";
import "./mobile.css";

function App() {
  const [state, setState] = useState(false);

  return (
    <div>
      {state ? (
        <IndexHome setState={setState} />
      ) : (
        <Index setState={setState} />
      )}
    </div>
  );
}

export default App;
