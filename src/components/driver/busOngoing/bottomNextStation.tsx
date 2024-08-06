import React from "react";

export default function BottomNextStation() {
  return (
    <div className="w-full flex px-[2rem] pb-[2.19rem] items-center fixed bottom-0 bg-black">
      <div className="flex flex-col gap-[0.44rem] flex-1">
        <div className="text-Bold28 text-lightGreen text-left">
          송파역 정류장
        </div>
        <div className="text-Bold21 text-mutegreen01 text-left">
          휠체어 정류장
        </div>
      </div>
      <div className="text-green text-Bold28">1명</div>
    </div>
  );
}
