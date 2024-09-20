import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";

export default function RequestConfirmPage() {
  const { pop } = useUserFlow();

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

        iconColor: "white",
        height: "5rem",
      }}
    >
      <article className="px-[1.25rem] flex flex-col w-full h-full justify-center items-center">
        <section className="text-Regular45">
          <div>
            <span>버스 탑승 시</span>
            <div>
              <span className="text-Bold45">설정 사항</span>
              <span>을</span>
            </div>
            <span className="text-Bold45">버스 기사님께</span>
            <div>
              <span className="text-Bold45">자동</span>
              <span>으로</span>
            </div>
            <div>
              <span className="text-Bold45">전송</span>
              <span>하시겠습니까?</span>
            </div>
          </div>
        </section>
        <section className="w-full mt-[3rem] flex gap-[0.62rem]">
          <button
            onClick={pop}
            className="w-full p-[1.19rem] border-[3px] border-busBlack rounded-[2.625rem] text-Regular45"
          >
            아니오
          </button>
          <button
            onClick={() => {
              pop();
              pop();
            }}
            className="bg-busGreen text-white w-full p-[1.19rem] border-[3px] border-busBlack rounded-[2.625rem] text-Regular45"
          >
            예
          </button>
        </section>
      </article>
    </AppScreen>
  );
}
