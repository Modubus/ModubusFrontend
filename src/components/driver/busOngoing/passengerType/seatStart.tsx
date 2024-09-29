export default function SeatStart({ num }: { num: number }) {
  return (
    <div className="px-[2.53rem] py-[1rem] flex flex-col gap-[0.5rem] bg-black text-white rounded-[2.625rem]">
      <p className="text-Bold45">앉으면 출발</p>
      <p className="text-Bold45">{num}명 승차</p>
    </div>
  );
}
