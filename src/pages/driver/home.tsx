import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

// home(버기)1, 초기 페이지 (버스 번호 등록 전)
const DriverHomePage: ActivityComponentType = () => {
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full flex flex-col items-center justify-between">
        {"Driver home-page"}
      </article>
    </AppScreen>
  );
};

export default DriverHomePage;
