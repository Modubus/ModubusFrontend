import "@src/App.css";
import { OnBoardStack } from "@src/stackflow/onBoardStackFlow";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStack } from "./stackflow/userStackFlow";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoardStack />} />
        <Route path="/user/home" element={<UserStack />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
