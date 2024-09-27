import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useUserFlow } from "@src/stackflow/userStackFlow";

const UserHomePage: ActivityComponentType = () => {
  const { push } = useUserFlow();
  const findBusHandler = () => {
    push("StartDestinationPage", {});
  };
  const setRequestHandler = () => {
    push("SetRequestPage", {});
  };
  const TextSettingHandler = () => {
    push("TextSettingPage", {});
  };
  // push("LightDisplayPage", {});
  const FavoriteHandler = () => {
    push("SettingPage", {});
  };

  return (
    <AppScreen
      backgroundColor="#727272"
      // appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full relative flex flex-col items-center justify-start">
        <section className="w-full h-full text-Bold45 flex flex-col gap-[7px]">
          <button
            onClick={findBusHandler}
            className="h-[40%] text-white bg-busGreen"
          >
            실시간 버스 길찾기
          </button>
          <button
            onClick={setRequestHandler}
            className="h-[18%] text-busBlack bg-white"
          >
            요청사항 설정
          </button>
          <button
            onClick={FavoriteHandler}
            className="h-[18%] text-busBlack bg-white"
          >
            즐겨찾는 길찾기
          </button>
          <button
            onClick={TextSettingHandler}
            className="h-[24%] text-busBlack bg-mutegreen01"
          >
            글자크기 조절
          </button>
        </section>
      </article>
    </AppScreen>
  );
};

export default UserHomePage;
