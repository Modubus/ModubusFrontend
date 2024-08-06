import BottomNextStation from "./bottomNextStation";
import WheelChair from "./passengerType/wheelChair";

export default function NextStationStatus() {
  return (
    <div>
      <div className="mt-[2.62rem] text-Bold28 text-mutegreen01">
        다음 정류장
      </div>
      <div className="text-Bold40 text-white mt-[8.06rem] mb-[3.63rem]">
        우창 아파트 정류장
      </div>
      <WheelChair />
      <BottomNextStation />
    </div>
  );
}
