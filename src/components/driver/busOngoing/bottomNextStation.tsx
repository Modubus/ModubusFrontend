type BottomNextStationProps = {
  nextStationName: string;
  passengersCount: number;
};
export default function BottomNextStation({
  nextStationName,
  passengersCount,
}: BottomNextStationProps) {
  return (
    <div className="fixed bottom-0 w-[100%]">
      <div className="w-0 h-0 border-l-[50vw] border-r-[50vw] border-t-[30px] border-l-black border-r-black border-t-darkGray"></div>
      <div className="w-full flex px-[2rem] py-[2.19rem] items-center bg-black">
        <div className="flex flex-col gap-[0.44rem] flex-1">
          <div className="text-Bold28 text-lightGreen text-left">
            {nextStationName}
          </div>
          <div className="text-Bold21 text-mutegreen01 text-left">
            휠체어 정류장
          </div>
        </div>
        <div className="text-green text-Bold28">{passengersCount}명</div>
      </div>
    </div>
  );
}
