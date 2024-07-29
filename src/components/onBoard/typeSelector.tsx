import { selectedUserType } from "@src/types/onBoard/userType.type";
import { Dispatch, SetStateAction } from "react";

export default function TypeSelector({
  type,
  clickedType,
  setClickedType,
}: {
  type: selectedUserType;
  clickedType?: "user" | "driver";
  setClickedType: Dispatch<SetStateAction<selectedUserType | undefined>>;
}) {
  if (type === "user") {
    return (
      <button
        onClick={() => setClickedType("user")}
        className={`rounded-[0.625rem] border border-[#D2F5D2] bg-[#181818] flex flex-col flex-1 gap-[0.625rem] shrink-0 justify-center items-center h-[15.8125rem] py-[1.125rem] px-[1.4375rem]
            ${clickedType === "user" ? "bg-green text-black" : ""}
            `}
      >
        {clickedType === "user" ? (
          <img src="/images/onBoard/greenClickBus.svg" alt="" />
        ) : (
          <img src="/images/onBoard/greenBgBus.svg" alt="" />
        )}

        <div className="flex flex-col">
          <span className="text-Bold21">버스 탑승객</span>
          <span className="text-Regular18">입니다.</span>
        </div>
      </button>
    );
  } else
    return (
      <button
        onClick={() => setClickedType("driver")}
        className={`rounded-[0.625rem] border border-[#D2F5D2] bg-[#181818] flex flex-col flex-1 gap-[0.625rem] shrink-0 justify-center items-center  h-[15.8125rem] py-[1.125rem] px-[1.4375rem]
          ${clickedType === "driver" ? "bg-lightGreen text-black" : ""}
            `}
      >
        {clickedType === "driver" ? (
          <img src="/images/onBoard/whiteClickBus.svg" alt="" />
        ) : (
          <img src="/images/onBoard/whiteBgBus.svg" alt="" />
        )}

        <div className="flex flex-col">
          <span className="text-Bold21">버스 기사</span>
          <span className="text-Regular18">입니다.</span>
        </div>
      </button>
    );
}

// display: flex;
// width: 11rem;
// height: 15.8125rem;
// padding: 1.125rem 1.4375rem;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// gap: 0.625rem;
// flex-shrink: 0;
// border-radius: 0.625rem;
// border: 1px solid var(--main-color-bus_lightgreen, #D2F5D2);
// background: var(--sub-color-sub_darkgray02, #181818);
