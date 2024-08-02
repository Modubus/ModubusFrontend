import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import HomeButton from "@src/components/user/homeButton";
import { useUserFlow } from "@src/stackflow/userStackFlow";

const UserHomePage: ActivityComponentType = () => {
  const { push } = useUserFlow();
  const findBusHandler = () => {
    push("FindBusPage", {});
  };
  const setRequestHandler = () => {
    push("SetRequestPage", {});
  };
  const lightDisplayHandler = () => {
    push("LightDisplayPage", {});
  };
  const SettingHandler = () => {
    push("SettingPage", {});
  };

  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full relative flex flex-col items-center justify-start">
        <section className="flex flex-col w-full gap-[1.5rem] items-center justify-start px-[2rem]">
          <HomeButton value="실시간 버스 길찾기" onClick={findBusHandler}>
            <img src="/icons/user/busIcon.svg" alt="" />
          </HomeButton>
          <HomeButton value="요청사항 설정" onClick={setRequestHandler}>
            <img src="/icons/user/addUserIcon.svg" alt="" />
          </HomeButton>
          <HomeButton value="전광판" onClick={lightDisplayHandler}>
            <img src="/icons/user/lightIcon.svg" alt="" />
          </HomeButton>
          <HomeButton value="설정" onClick={SettingHandler}>
            <img src="/icons/user/settingIcon.svg" alt="" />
          </HomeButton>
        </section>
        <section className="w-full px-[2rem] mb-[2rem] absolute bottom-0">
          <button className="flex gap-[1.62rem] rounded-[0.625rem] py-[1.56rem] px-[1.44rem] bg-lightGreen w-full text-black">
            <img src="/icons/circleHelp.svg" alt="" />
            <div className="flex flex-col gap-[0.62rem]">
              <span className="text-Bold28 text-start">앱 사용방법</span>
              <div>
                <p className="text-Regular16 text-start">
                  앱 사용방법을 자세히
                </p>
                <p className="text-Regular16 text-start">설명해드립니다.</p>
              </div>
            </div>
          </button>
        </section>
      </article>
    </AppScreen>
  );
};

export default UserHomePage;
