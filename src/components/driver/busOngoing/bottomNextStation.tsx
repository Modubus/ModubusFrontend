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
      <div className="w-0 h-0 border-l-[50vw] border-r-[50vw] border-t-[3.3rem] border-t-white border-l-lightGrey border-r-lightGrey"></div>
      <div className="flex flex-col gap-[1rem] w-full pt-[1rem] pb-[0.5rem] bg-lightGrey">
        <div className="text-Bold45 text-center w-full">{nextStationName}</div>
        <div className="flex justify-between px-[1.25rem]">
          <div className="text-Bold45 text-center">시각 장애인</div>
          <div className="text-Bold45">{passengersCount}명</div>
        </div>
      </div>
    </div>
  );
}
