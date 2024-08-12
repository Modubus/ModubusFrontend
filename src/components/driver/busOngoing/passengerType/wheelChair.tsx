export default function WheelChair() {
  return (
    <div className="px-[2.53rem] flex flex-col gap-[0.69rem]">
      <div className="flex items-center gap-[1.38rem]">
        <img src="/icons/driver/passengerType/wheelchair.svg" alt="" />
        <div className="text-Bold30 text-green grow text-left">
          휠체어 사용자
        </div>
        <div className="flex gap-[0.62rem] items-center">
          <span className="text-Bold40 text-[#FF6869] ">1</span>{" "}
          <span className="text-Bold30">명</span>
        </div>
      </div>
      <div className="text-Regular18 text-mutegreen01 text-left">
        휠체어의 안전한 승하차를 위해 미리
        <br /> 경사판(슬로프) 및 좌석을 준비해주세요.
      </div>
    </div>
  );
}
