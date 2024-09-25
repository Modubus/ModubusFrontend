import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import ImageWrapper from "@src/components/basic/ImageWrapper";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { busIdParamsType } from "./searchCode";

// home(버기)1, 초기 페이지 (버스 번호 등록 전)
const EnrollBusNum: ActivityComponentType<busIdParamsType> = ({ params }) => {
  const { push, pop } = useDriveFlow();
  const handleButtonClick = () => {
    push("SearchBusNumPage", { id: params.id, name: params.name });
  };
  return (
    <AppScreen backgroundColor="white">
      <article className="w-full h-full flex flex-col items-center px-[2rem]">
        <div className="w-full flex py-[2.3rem] h-[20.3rem] gap-[0.62rem]">
          <ImageWrapper className="min-w-[3.1875rem]">
            <img
              className="align-top"
              alt="뒤로가기"
              src="/icons/backButton.svg"
              onClick={() => {
                pop();
                pop();
              }}
            />
          </ImageWrapper>

          <p className="text-Regular45 text-left break-keep">
            <b>버스 번호</b>를 입력해주세요.
          </p>
        </div>
        <div
          className="w-full text-left text-Regular45 text-darkGray3 border-b-[7px] border-black py-[1.09rem]"
          onClick={handleButtonClick}
        >
          버스 번호
        </div>
      </article>
    </AppScreen>
  );
};

export default EnrollBusNum;
