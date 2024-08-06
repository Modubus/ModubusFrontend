export default function DefaultStatus() {
  const dummyList = [
    { station: "우창 아파트 정류장", number: 2 },
    { station: "송파역 정류장", number: 1 },
    { station: "구로구역 정류장", number: 3 },
  ];
  return (
    <div className="mt-[4.5rem] px-[2rem] flex flex-col ">
      {dummyList.map((item, idx) => (
        <div
          className="flex justify-between items-center py-[1.25rem] border-b-[0.0625rem] border-b-[#3B4A41]"
          key={idx}
        >
          <div className="flex flex-col gap-[0.44rem]">
            <div className="text-Bold28 text-lightGreen">{item.station}</div>
            <div className="text-Bold21 text-mutegreen01 text-left">
              휠체어 사용자
            </div>
          </div>
          <div className="text-Bold28 text-green">{item.number + "명"}</div>
        </div>
      ))}
    </div>
  );
}
