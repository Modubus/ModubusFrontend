import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useNavigate } from "react-router-dom";

const OnBoardPage: ActivityComponentType = () => {
  const router = useNavigate();
  return (
    <AppScreen appBar={{ title: "" }}>
      <article className="w-full h-full flex flex-col items-center">
        <button
          onClick={() => router("/user/home")}
          className="bg-[#071124] text-white flex-1 flex flex-col w-full items-center justify-center"
        >
          <span className="text-Bold45">버스 탑승객</span>
          <span className="text-Regular45">입니다.</span>
        </button>
        <button
          onClick={() => router("/driver/home")}
          className="flex-1 flex flex-col w-full items-center justify-center"
        >
          <span className="text-Bold45">버스 기사</span>
          <span className="text-Regular45">입니다.</span>
        </button>
      </article>
    </AppScreen>
  );
};

export default OnBoardPage;
