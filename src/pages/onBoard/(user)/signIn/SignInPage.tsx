import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

type UserSignInPageParams = {
  // title: string;
};
const UserSignInPage: ActivityComponentType<UserSignInPageParams> = () => {
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white", height: "3rem" }}
    >
      <article className="w-full h-full flex flex-col justify-center">
        <section className="flex-1 flex flex-col w-full items-center justify-center gap-[1rem]"></section>
      </article>
    </AppScreen>
  );
};

export default UserSignInPage;
