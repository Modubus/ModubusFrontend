import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import OnBoardPage from "@src/pages/onBoard/OnBoardPage";
import UserSignInPage from "@src/pages/onBoard/(user)/signIn/SignInPage";
import UserSignUpStep1Page from "@src/pages/onBoard/(user)/signUp/SignUpStep1";
import UserSignUpStep2Page from "@src/pages/onBoard/(user)/signUp/SignUpStep2";
import UserSignUpStep3Page from "@src/pages/onBoard/(user)/signUp/SignUpStep3";
import DriverSignInPage from "@src/pages/onBoard/(driver)/signIn/SignInPage";
import DriverSignUpPage from "@src/pages/onBoard/(driver)/signUp/SignUpPage";
import SelectPage from "@src/pages/onBoard/SelectPage";


export const { Stack: OnBoardStack, useFlow: useOnBoardFlow } = stackflow({
  transitionDuration: 350,
  activities: { OnBoardPage, SelectPage, UserSignInPage, UserSignUpStep1Page, UserSignUpStep2Page, UserSignUpStep3Page, DriverSignInPage, DriverSignUpPage },
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
  ],
  initialActivity: () => "OnBoardPage",
});
