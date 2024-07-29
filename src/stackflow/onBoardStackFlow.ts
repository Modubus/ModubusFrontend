import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import OnBoardPage from "@src/pages/onBoard/OnBoardPage";
import LoginPage from "@src/pages/onBoard/LoginPage";
import RegisterPage from "@src/pages/onBoard/RegisterPage";

export const { Stack: OnBoardStack, useFlow: useOnBoardFlow } = stackflow({
  transitionDuration: 350,
  activities: { OnBoardPage, LoginPage, RegisterPage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "OnBoardPage",
});
