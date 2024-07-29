import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import ImageWrapper from "@src/components/basic/ImageWrapper";
import OnBoardButton from "@src/components/onBoard/onBoardButton";

const OnBoardPage: ActivityComponentType = () => {
  return (
    <AppScreen backgroundColor="#121212" appBar={{ title: "" }}>
      <article className="w-full h-full flex flex-col items-center">
        <section className="flex-1 flex flex-col w-full items-center justify-between">
          <div className="w-[16.0625rem] flex flex-col items-center gap-[4.25rem] mt-[6.81rem]">
            <ImageWrapper>
              <img src="images/onBoard/onBoardImg.svg" alt="" />
            </ImageWrapper>
            <div className="text-white text-center text-[1rem] leading-normal font-normal not-italic">
              모두가 행복하게 버스를 타는 그날까지, 모두버스를 통해 버스를
              탑승해보세요 !
            </div>
          </div>
          <OnBoardButton></OnBoardButton>
        </section>
      </article>
    </AppScreen>
  );
};

export default OnBoardPage;
