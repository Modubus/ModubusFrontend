import { getBusStation, getStationEnd } from "@src/api/bus/get";
import { useUserFlow } from "@src/stackflow/userStackFlow";
import { usePlaceKeywordStore } from "@src/store/placeKeyword";
import {
  getBusStationResponse,
  getStationEndResponse,
} from "@src/types/api/bus/get.type";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

{
  /* 0:일반버스
1:저상버스
2:굴절버스 */
}

const BUS_TYPE = {
  "0": "일반",
  "1": "저상",
  "2": "굴절",
};

export default function SelectBusPage() {
  const [busDetailDataList, setBusDetailDataList] = useState<{
    listData: getStationEndResponse;
    detailData: (getBusStationResponse | null)[];
  }>();
  const {
    data: { startDes, endDes },
  } = usePlaceKeywordStore();
  const { pop } = useUserFlow();

  const { isPending, isError, data } = useQuery({
    queryKey: ["getStationEnd"],
    queryFn: () =>
      getStationEnd({ startStation: startDes, endStation: endDes }),
  });
  useEffect(() => {
    if (!data) return;

    const fetchBusDetails = async () => {
      const busDetailData = await Promise.all(
        data.map(async (d) => {
          const busNumber = d.busNumber
            ? d.busNumber.match(/[A-Za-z]*\d+/)
            : null;

          try {
            const busData = await getBusStation({
              routeno: busNumber ? busNumber[0] : "0",
              startStation: startDes,
            });
            return busData;
          } catch (error) {
            console.error("Error fetching bus station data:", error);
            return null; // 에러 발생 시 null 반환
          }
        })
      );
      setBusDetailDataList({ listData: data, detailData: busDetailData });
    };

    fetchBusDetails();
  }, [data, startDes]);

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
          {isPending && (
            <div className="w-full h-full flex items-center justify-center">
              loading...
            </div>
          )}
          {isError ? (
            <div>검색결과 없음</div>
          ) : (
            <div className="overflow-y-auto px-[1.25rem] text-start flex flex-col gap-[1.56rem]">
              {busDetailDataList?.detailData?.map((d, idx) =>
                d ? (
                  <div
                    className="px-[1.44rem]  rounded-[2.625rem] border-[4px] border-busGreen"
                    key={idx}
                  >
                    <div className="border-b pt-[0.69rem] pb-[0.62rem]">
                      <span className="text-lightRed text-Bold30">
                        {d.arrmsg1}
                      </span>
                      {/* <span>ㅇㅇ행</span> */}
                    </div>

                    <div className="border-b pt-[0.62rem] pb-[0.69rem]">
                      총{" "}
                      <span className="text-Bold45">
                        {busDetailDataList.listData[idx].totalTime}분
                      </span>
                    </div>
                    <div className="py-[0.69rem]">
                      <span className="text-Bold45">
                        {BUS_TYPE[d.busType1 as keyof typeof BUS_TYPE]}
                      </span>{" "}
                      {busDetailDataList.listData[idx].busNumber}
                    </div>
                  </div>
                ) : (
                  <div key={idx}></div>
                )
              )}
            </div>
          )}
        </section>
      </article>
    </AppScreen>
  );
}
