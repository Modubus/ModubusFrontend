import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

const UserHomePage: ActivityComponentType = () => {
  return (
    <AppScreen backgroundColor="#121212" appBar={{ title: "" }}>
      <article className="w-full h-full flex flex-col items-center">
        <section className="flex-1 flex flex-col w-full items-center justify-between">
          user Home
        </section>
      </article>
    </AppScreen>
  );
};

export default UserHomePage;
