import Header from "@src/components/driver/busOngoing/header";
import NextStationStatus from "@src/components/driver/busOngoing/nextStationStatus";
import DefaultStatus from "@src/components/driver/busOngoing/defaultStatus";
import NoPassenger from "@src/components/driver/busOngoing/noPassenger";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const BusOngoingPage: ActivityComponentType = () => {
  // TODO: 이곳에서 api polling
  // 아래의 mockData 형식을 지속적으로 받아오면 될 듯 함
  const mockData = {
    현재버스노선방향상가까운정류장: "우창 아파트 정류장",
    탑승객이있는이번정류장: "우창 아파트 정류장",
    탑승객이있는다음정류장: "송파역 정류장",
    탑승객이있는가까운정류장리스트: [
      {
        stationName: "우창 아파트 정류장",
        passengers: [
          { type: "wheelchair", 하차정류장: "구로구역 정류장" },
          { type: "seat", 하차정류장: "목동역 정류장" },
          {
            type: "wheelchair",
            하차정류장: "신촌오거리역, 신촌현대백화점 정류장",
          },
        ],
      },
      {
        stationName: "송파역 정류장",
        passengers: [
          { type: "wheelchair" },
          { type: "seat" },
          { type: "wheelchair" },
        ],
      },
    ],
  };
  return (
    <AppScreen backgroundColor="#1a1a1a">
      <Header busNumber={3317} />
      <NextStationStatus />
      {/* TODO: polling되는 정보를 기반으로 아래 조건에 따른 조건부 렌더링 */}
      {/* 현재 위치 주변에 탑승객이 없을 떄: <NoPassenger/> */}
      {/* 탑승객이 있는데 현재 위치가 다음 정류장이 아닐 떄 : <DefaultStatus/> */}
      {/* 탑승객이 있는데 현재 위치가 다음 정류장일 때: <NextStationStatus /> */}
    </AppScreen>
  );
};

export default BusOngoingPage;
