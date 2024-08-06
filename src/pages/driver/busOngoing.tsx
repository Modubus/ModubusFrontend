import Header from "@src/components/driver/busOngoing/header";
import NoPassenger from "@src/components/driver/busOngoing/noPassenger";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

// 버스 운행 중 페이지
const BusOngoingPage: ActivityComponentType = () => {
  return (
    <AppScreen backgroundColor="#121212">
      <Header busNumber={3317} />
      <NoPassenger />
    </AppScreen>
  );
};

export default BusOngoingPage;
