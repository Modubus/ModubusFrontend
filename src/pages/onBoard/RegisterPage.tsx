import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

type RegisterPageParams = {
  title: string;
};
const RegisterPage: ActivityComponentType<RegisterPageParams> = () => {
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{ title: "", iconColor: "white" }}
    >
      <article className="w-full h-full flex flex-col justify-center">
        <section className="flex-1 flex flex-col w-full items-center justify-center gap-[1rem]"></section>
      </article>
    </AppScreen>
  );
};

export default RegisterPage;
