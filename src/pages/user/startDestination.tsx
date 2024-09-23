import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import KakaoFindPlace from "@src/components/user/findPlace/findPlace";
export default function StartDestinationPage() {
  const { pop } = useUserFlow();

  return (
    <AppScreen backgroundColor="#ffffff">
      <article className="px-[1.25rem] h-full flex flex-col">
        <header className="flex items-start py-[1.44rem] h-[12.625rem]">
          <button className="pt-[0.4rem]" onClick={() => pop()}>
            <img src="/icons/backButton.svg" alt="" />
          </button>
          <div className="text-start text-Regular45 ">
            <span className="text-Bold45">출발지</span>
            <span>를</span>
            <div>입력해주세요</div>
          </div>
        </header>
        <section className="flex-1 pb-[2rem]">
          <KakaoFindPlace></KakaoFindPlace>
        </section>
      </article>
    </AppScreen>
  );
}
