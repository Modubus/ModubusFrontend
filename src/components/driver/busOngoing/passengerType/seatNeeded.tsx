export default function SeatNeeded() {
  return (
    <div className="px-[2.53rem] flex flex-col gap-[0.69rem]">
      <div className="flex items-center gap-[1.38rem]">
        <img src="/icons/driver/passengerType/seat.svg" alt="" />
        <div className="text-Bold30 text-green grow text-left">좌석 이용자</div>
        <div className="flex gap-[0.62rem] items-center">
          <span className="text-Bold40 text-[#FF6869] ">2</span>{" "}
          <span className="text-Bold30">명</span>
        </div>
      </div>
      <div className="text-Regular18 text-mutegreen01 text-left">
        안전한 좌석 이용을 위해 승하차 및
        <br /> 앉을 좌석을 준비해주세요.
      </div>
    </div>
  );
}
