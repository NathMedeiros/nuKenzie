import Index from "./components/homePage";
import { useState } from "react";
import IndexHome from "./components/pageFinance/indexHome";
import "./App.css";
import "./components/pageFinance/finance.css";
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
