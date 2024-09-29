export default function SeatNeeded({ num }: { num: number }) {
  return (
    <div className="px-[2.53rem] py-[1rem] flex flex-col gap-[0.5rem] bg-lightRed text-white rounded-[2.625rem]">
      <p className="text-Bold45">좌석 이용 준비</p>
      <p className="text-Bold45">{num}명 하차</p>
    </div>
  );
}
