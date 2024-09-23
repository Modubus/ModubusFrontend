import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import UserHomePage from "@src/pages/user/home";
import StartDestinationPage from "@src/pages/user/startDestination";
import EndDestinationPage from "@src/pages/user/endDestination";
import LightDisplayPage from "@src/pages/user/lightDisplay";
import SetRequestPage from "@src/pages/user/setRequest";
import SettingPage from "@src/pages/user/setting";
import RequestConfirmPage from "@src/pages/user/requestConfirm";
import TextSettingPage from "@src/pages/user/textSetting";
import SelectBusPage from "@src/pages/user/selectBus";

export const { Stack: UserStack, useFlow: useUserFlow } = stackflow({
    transitionDuration: 350,
    activities: { UserHomePage, StartDestinationPage, EndDestinationPage, SelectBusPage, LightDisplayPage, SetRequestPage, SettingPage, RequestConfirmPage, TextSettingPage },
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    initialActivity: () => "UserHomePage",
});
