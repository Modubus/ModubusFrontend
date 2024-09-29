import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import EnrollCodePage from "@src/pages/driver/enrollCode";
import SearchCodePage from "@src/pages/driver/searchCode";
import BusOngoingPage from "@src/pages/driver/busOngoing";
import EnrollBusNumPage from "@src/pages/driver/enrollBusNum";
import SearchBusNumPage from "@src/pages/driver/searchBusNum";
import SubmitBusInfoPage from "@src/pages/driver/submitBusInfo";

export const { Stack: DriverStack, useFlow: useDriveFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    EnrollCodePage,
    SearchCodePage,
    EnrollBusNumPage,
    SearchBusNumPage,
    BusOngoingPage,
    SubmitBusInfoPage,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "EnrollCodePage",
});
