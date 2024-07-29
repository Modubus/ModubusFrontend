import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import OnBoardPage from "@src/pages/onBoard/OnBoardPage";
import UserSignInPage from "@src/pages/onBoard/(user)/signIn/SignInPage";
import UserSignUpPage from "@src/pages/onBoard/(user)/signUp/SignUpPage";
import DriverSignInPage from "@src/pages/onBoard/(driver)/signIn/SignInPage";
import DriverSignUpPage from "@src/pages/onBoard/(driver)/signUp/SignUpPage";
import SelectPage from "@src/pages/onBoard/SelectPage";


export const { Stack: OnBoardStack, useFlow: useOnBoardFlow } = stackflow({
  transitionDuration: 350,
  activities: { OnBoardPage, SelectPage, UserSignInPage, UserSignUpPage, DriverSignInPage, DriverSignUpPage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "OnBoardPage",
});
