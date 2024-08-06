export default function NoPassenger() {
  return (
    <div className="mt-[4rem] px-[3.06rem] flex flex-col items-center">
      <img src="/icons/driver/noPassenger.svg" />

      <h1 className="text-Bold40 text-lightGreen mt-[4.19rem]">
        탑승 예정 승객이 없습니다.
      </h1>
      <p className="text-Regular27 text-mutegreen01 mt-[2rem]">
        {"요청 사항이 접수되면 곧바로 알려드릴게요 :)"}
      </p>
    </div>
  );
}
