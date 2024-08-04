import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import DriverHomePage from "@src/pages/driver/home";
import EnrollBusPage from "@src/pages/driver/enrollBus";
import BusOngoingPage from "@src/pages/driver/busOngoing";

export const { Stack: DriverStack, useFlow: useDriveFlow } = stackflow({
  transitionDuration: 350,
  activities: { DriverHomePage, EnrollBusPage, BusOngoingPage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "DriverHomePage",
});
