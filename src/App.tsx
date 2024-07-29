import "@src/App.css";
import { OnBoardStack } from "@src/stackflow/onBoardStackFlow";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoardStack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
