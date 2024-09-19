import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import OnBoardPage from "@src/pages/onBoard/OnBoardPage";
import DriverEnterCompanyCodePage from "@src/pages/onBoard/(driver)/DriverEnterCompanyCode";

export const { Stack: OnBoardStack, useFlow: useOnBoardFlow } = stackflow({
  transitionDuration: 350,
  activities: {
    OnBoardPage,
    DriverEnterCompanyCodePage,
  },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "OnBoardPage",
});
