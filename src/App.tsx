import "@src/App.css";
import { OnBoardStack } from "@src/stackflow/onBoardStackFlow";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserStack } from "./stackflow/userStackFlow";
import { DriverStack } from "./stackflow/driverStackFlow";
import { useEffect, useState } from "react";
import SplashScreen from "./components/basic/SplashScreen";

function App() {
  const queryClient = new QueryClient();
  const [isLoading, setIsLoading] = useState(false);
  // 로딩 상태를 관리하는 useEffect
  useEffect(() => {
    // 실제 데이터 로드나 초기화 로직을 여기에 추가
    // const loadAppData = async () => {
    //   // 로딩을 위한 2초 딜레이 (API 호출 등을 여기서 처리 가능)
    //   await new Promise((resolve) => setTimeout(resolve, 2000));
    //   setIsLoading(false);
    // };
    // loadAppData();
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      {isLoading ? (
        <SplashScreen />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<OnBoardStack />} />
            <Route path="/user/home" element={<UserStack />} />
            <Route path="/driver/home" element={<DriverStack />} />
          </Routes>
        </BrowserRouter>
      )}
    </QueryClientProvider>
  );
}

export default App;
