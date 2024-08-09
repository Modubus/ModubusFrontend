import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import ImageWrapper from "@src/components/basic/ImageWrapper";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";

// home(버기)1, 초기 페이지 (버스 번호 등록 전)
const DriverHomePage: ActivityComponentType = () => {
  const { push } = useDriveFlow();
  const onClickButton = () => {
    push("EnrollBusPage", {});
  };
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full flex flex-col items-cente justify-between px-[2rem]">
        <button
          className="border flex gap-[1.62rem] w-full py-[1.12rem] px-[1.44rem] bg-lightGreen text-black rounded-[0.625rem]"
          onClick={onClickButton}
        >
          <ImageWrapper>
            <img src="/icons/user/busIcon.svg" alt="" />
          </ImageWrapper>
          <div className="button-text flex flex-col gap-[0.62rem]">
            <span className="text-Bold21 text-[5.5vw]">
              {"버스 번호를 등록하기"}
            </span>
            <span className="text-Regular16 text-left">
              운행하시는 버스 번호를 <br /> 등록해주세요.
            </span>
          </div>
        </button>
      </article>
    </AppScreen>
  );
};

export default DriverHomePage;
