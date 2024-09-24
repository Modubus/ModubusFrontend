import BottomNextStation from "./bottomNextStation";
import SeatNeeded from "./passengerType/seatNeeded";
import SeatStart from "./passengerType/seatStart";
import Slope from "./passengerType/Slope";
import SlowRide from "./passengerType/slowRide";
type NextStationStatusProps = {
  currentStationName: string;
  nextStationName: string;
};
export default function NextStationStatus({
  currentStationName = "우창 아파트 정류장",
  nextStationName = "송파역 정류장",
}: NextStationStatusProps) {
  return (
    <section className="relative h-[calc(100vh-315px)] flex flex-col items-center justify-center gap-[2.19rem]">
      <div className="text-Bold40">{currentStationName}</div>
      {/* 승객 요청사항리스트 */}
      <div className="flex flex-col w-full gap-[1.06rem] h-full overflow-scroll scrollbar-hide px-[1.22rem] pb-[4rem]">
        <SeatNeeded num={1} />
        <Slope num={3} />
        <SlowRide num={4} />
        <SeatStart num={4} />
      </div>
      <BottomNextStation
        nextStationName={nextStationName}
        passengersCount={2}
      />
    </section>
  );
}
