import "@src/App.css";
import { OnBoardStack } from "@src/stackflow/onBoardStackFlow";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStack } from "./stackflow/userStackFlow";
import { DriverStack } from "./stackflow/driverStackFlow";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoardStack />} />
          <Route path="/user/home" element={<UserStack />} />
          <Route path="/driver/home" element={<DriverStack />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
