import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const SubmitBusInfo: ActivityComponentType = () => {
  const { push } = useDriveFlow();
  const handleButtonClick = () => {
    push("BusOngoingPage", {});
  };
  return (
    <AppScreen backgroundColor="white">
      <article className="w-full h-full flex flex-col items-center px-[2rem] gap-[1rem] relative">
        <div className="text-Bold45 text-left w-full py-[0.62rem] border-b-[7px] mt-[2.87rem]">
          관악교통
        </div>
        <div className="text-Bold45 text-left w-full py-[0.62rem] border-b-[7px]">
          3317 - 01
        </div>

        <button
          className="fixed bottom-0 left-0 bg-black w-full h-[8rem] text-Bold45 text-white"
          onClick={handleButtonClick}
        >
          입력 완료
        </button>
      </article>
    </AppScreen>
  );
};

export default SubmitBusInfo;
