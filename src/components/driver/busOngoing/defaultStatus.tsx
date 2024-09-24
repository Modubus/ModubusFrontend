export default function DefaultStatus() {
  const dummyList = [
    { station: "우창 아파트 정류장", number: 2, description: "휠체어 사용자" },
    { station: "송파역 정류장", number: 1, description: "휠체어 사용자" },
    { station: "구로구역 정류장", number: 3, description: "휠체어 사용자" },
  ];
  return (
    <div className="mt-[1.75rem] flex flex-col w-full px-[1.25rem] gap-[1.56rem]">
      {dummyList.map((item, idx) => (
        <div className="rounded-[2.625rem] border-[4px] bg-black" key={idx}>
          <div className="text-Bold28 text-left bg-black p-[0.88rem] rounded-t-[2.625rem] text-white">
            {item.station}
          </div>
          <div className="pt-[0.31rem] px-[0.87rem] pb-[0.87rem] bg-white rounded-b-[2.5rem]">
            <div className="text-left text-Regular45">{item.description}</div>
            <div className="text-left text-Bold45">{item.number + "명"}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
