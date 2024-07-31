import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import UserHomePage from "@src/pages/user/home";
import FindBusPage from "@src/pages/user/findBus";
import LightDisplayPage from "@src/pages/user/lightDisplay";
import SetRequestPage from "@src/pages/user/setRequest";
import SettingPage from "@src/pages/user/setting";



export const { Stack: UserStack, useFlow: useUserFlow } = stackflow({
    transitionDuration: 350,
    activities: { UserHomePage, FindBusPage, LightDisplayPage, SetRequestPage, SettingPage },
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    initialActivity: () => "UserHomePage",
});
