import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useState } from "react";

export default function TextSettingPage() {
  const { pop } = useUserFlow();
  const [fontSize, setFontSize] = useState(localStorage.getItem("fontSize"));
  const changeFontSize = (size: number) => {
    if (size === 0) {
      setFontSize("21");
      localStorage.setItem("fontSize", "21");
      document.documentElement.style.setProperty("--font-size-45", `21px`);
    } else if (size === 1) {
      setFontSize("35");
      localStorage.setItem("fontSize", "35");
      document.documentElement.style.setProperty("--font-size-45", `35px`);
    } else if (size === 2) {
      setFontSize("45");
      localStorage.setItem("fontSize", "45");
      localStorage.setItem("fontSize", "45");
      document.documentElement.style.setProperty("--font-size-45", `45px`);
    }
  };
  return (
    <AppScreen
      backgroundColor="#ffffff"
      appBar={{
        backButton: {
          render: () => (
            <button className="ms-[2rem] mt-[0.5rem]" onClick={() => pop()}>
              <img src="/icons/backButton.svg" alt="" />
            </button>
          ),
        },
        title: <div className="text-Bold40 mt-[0.5rem]">글자크기 조절</div>,
        iconColor: "white",
        height: "5rem",
      }}
    >
      <article className="mt-[4rem] px-[1.25rem] flex flex-col gap-[3.37rem] w-full h-full">
        <section className="px-[0.44rem] w-full">
          <div className="px-[3rem] pe-[5rem] w-full flex justify-between ">
            <div className="p-[0.38rem] py-[0.6rem] strokew-[6px] bg-[#DBDBDB] rounded-b-[1rem] rounded-t-[1rem]"></div>
            <div className="p-[0.38rem] strokew-[6px] bg-[#DBDBDB] rounded-b-[1rem] rounded-t-[1rem]"></div>
            <div className="p-[0.38rem] strokew-[6px] bg-[#DBDBDB] rounded-b-[1rem] rounded-t-[1rem]"></div>
          </div>
          <div className="flex w-full items-center justify-between gap-[1.38rem]">
            <span
              style={{
                fontSize: "21px",
                fontWeight: "bold",
              }}
            >
              가
            </span>

            <input
              onChange={(e) => changeFontSize(parseInt(e.target.value))}
              id="steps-range"
              type="range"
              min="0"
              max="2"
              value={fontSize === "21" ? "0" : fontSize === "35" ? "1" : "2"}
              step="1"
              className="flex-1 h-[1.0625rem] bg-busGreen rounded-lg appearance-none cursor-pointer"
            />

            <span
              style={{
                fontSize: "45px",
                fontWeight: "bold",
              }}
            >
              가
            </span>
          </div>
        </section>
        <section className="text-Regular45 bg-mutegreen01 rounded-[2.625rem] py-[1.25rem] px-[1.06rem]">
          <span>모두가 편리하게 버스를 타는 그날까지</span>
        </section>
      </article>
    </AppScreen>
  );
}
