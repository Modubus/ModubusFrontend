import { postBusInfo } from "@src/api/driver/post";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

type submitBusInfoParams = {
  id: number;
  name: string;
  vehicleno: string;
};

const SubmitBusInfo: ActivityComponentType<submitBusInfoParams> = ({
  params,
}) => {
  const { push } = useDriveFlow();
  const handleButtonClick = async () => {
    const res = await postBusInfo({
      busCompanyId: params.id,
      vehicleno: params.vehicleno,
    });
    if (res) {
      push("BusOngoingPage", { id: res.data.busId });
    }
  };
  return (
    <AppScreen backgroundColor="white">
      <article className="w-full h-full flex flex-col items-center px-[2rem] gap-[1rem] relative">
        <div className="text-Bold45 text-left w-full py-[0.62rem] border-b-[7px] mt-[2.87rem]">
          {params.name}
        </div>
        <div className="text-Bold45 text-left w-full py-[0.62rem] border-b-[7px]">
          {params.vehicleno}
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
