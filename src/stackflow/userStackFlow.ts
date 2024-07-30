import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import UserHomePage from "@src/pages/user/home";



export const { Stack: UserStack, useFlow: useUserFlow } = stackflow({
    transitionDuration: 350,
    activities: { UserHomePage },
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
    ],
    initialActivity: () => "UserHomePage",
});
