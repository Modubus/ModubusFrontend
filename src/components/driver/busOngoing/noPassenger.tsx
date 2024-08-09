export default function NoPassenger() {
  return (
    <div className="mt-[17vh] px-[2%] flex flex-col items-center">
      <img src="/icons/driver/noPassenger.svg" />
      <h1 className="text-Bold40 text-lightGreen mt-[4.19rem] break-keep">
        탑승 예정 승객이 없습니다.
      </h1>
      <p className="text-Regular27 text-mutegreen01 mt-[2rem] break-keep">
        {"요청 사항이 접수되면 곧바로 알려드릴게요 :)"}
      </p>
    </div>
  );
}
