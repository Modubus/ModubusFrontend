import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import HomeButton from "@src/components/user/homeButton";

const UserHomePage: ActivityComponentType = () => {
  const findBusHandler = () => {};
  const setRequestHandler = () => {};
  const lightDisplayHandler = () => {};
  const SettingHandler = () => {};

  return (
    <AppScreen backgroundColor="#121212" appBar={{ title: "" }}>
      <article className="w-full h-full flex flex-col items-center">
        <section className="flex-1 flex flex-col w-full gap-[1.5rem] items-center justify-start px-[2rem]">
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
      </article>
    </AppScreen>
  );
};

export default UserHomePage;
