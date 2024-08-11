import BottomNextStation from "./bottomNextStation";
import SeatNeeded from "./passengerType/seatNeeded";
import WheelChair from "./passengerType/wheelChair";
type NextStationStatusProps = {
  currentStationName: string;
  nextStationName: string;
};
export default function NextStationStatus({
  currentStationName = "우창 아파트 정류장",
  nextStationName = "송파역 정류장",
}: NextStationStatusProps) {
  return (
    <div className="relative">
      <div className="mt-[2.62rem] text-Bold28 text-mutegreen01">
        이번 정류장
      </div>
      <p className="text-Bold16 text-warn absolute top-[3.3rem] w-full">
        <span className="text-Bold18">휠체어 사용자 1명 </span>하차합니다.
      </p>
      <div className="text-Bold40 text-white mt-[8.06rem] mb-[3.63rem]">
        {currentStationName}
      </div>
      {/* 승객 요청사항리스트 */}
      <div className="flex flex-col gap-[0.94rem] h-[16rem] overflow-scroll ">
        <WheelChair />
        <SeatNeeded />
        <SeatNeeded />
      </div>
      <BottomNextStation
        nextStationName={nextStationName}
        passengersCount={2}
      />
    </div>
  );
}
