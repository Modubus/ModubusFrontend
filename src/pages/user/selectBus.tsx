import { getStationEnd } from "@src/api/bus/get";
import { useUserFlow } from "@src/stackflow/userStackFlow";
import { usePlaceKeywordStore } from "@src/store/placeKeyword";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useQuery } from "@tanstack/react-query";
export default function SelectBusPage() {
  const {
    data: { startKeyword, endKeyword },
  } = usePlaceKeywordStore();
  const { pop } = useUserFlow();
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["getStationEnd"],
    queryFn: () =>
      getStationEnd({ startStation: startKeyword, endStation: endKeyword }),
  });
  if (isPending) {
    // isLoading을 사용하여 데이터가 로딩중일 때 화면을 랜더링합니다.
    return (
      <AppScreen backgroundColor="#ffffff">
        <article className="h-full flex flex-col">
          <header className="shadow-[0_11px_8.6px_0_rgba(0,0,0,0.10)] ">
            <section className="px-[1.25rem] py-[1.44rem] flex items-start">
              <button className="pt-[0.4rem] " onClick={() => pop()}>
                <img src="/icons/backButton.svg" alt="" />
              </button>
              <div className="text-start text-Regular45 ">
                <span className="text-Bold45">탑승할 버스 선택</span>
              </div>
            </section>
          </header>

          <section className="flex-1 text-Regular45 flex items-center justify-center">
            <div className="">loading...</div>
          </section>
        </article>
      </AppScreen>
    );
  }

  if (isError) {
    // isError를 사용하여 error가 발생할 때 화면을 랜더링합니다.
    return (
      <AppScreen backgroundColor="#ffffff">
        <div>Error: {error?.message || "에러발생"}</div>;
      </AppScreen>
    );
  }
  return (
    <AppScreen backgroundColor="#ffffff">
      <article className="h-full flex flex-col">
        <header className="shadow-[0_11px_8.6px_0_rgba(0,0,0,0.10)]">
          <section className="px-[1.25rem] py-[1.44rem] flex items-start">
            <button className="pt-[0.4rem] " onClick={() => pop()}>
              <img src="/icons/backButton.svg" alt="" />
            </button>
            <div className="text-start text-Regular45 ">
              <span className="text-Bold45">탑승할 버스 선택</span>
            </div>
          </section>
        </header>

        <section className="mt-[2.69rem] text-Regular45 flex-1">
          {isError ? (
            <div>검색결과 없음</div>
          ) : (
            <div className="">
              {data.map((d) => (
                <div>
                  {d.busNumber}
                  {d.busType}
                </div>
              ))}
            </div>
          )}
        </section>
      </article>
    </AppScreen>
  );
}
