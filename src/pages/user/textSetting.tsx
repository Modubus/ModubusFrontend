import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";

export default function TextSettingPage() {
  const { pop } = useUserFlow();
  return (
    <AppScreen
      backgroundColor="#ffffff"
      appBar={{
        backButton: {
          render: () => (
            <button className="ms-[2rem] mt-[0.5rem]" onClick={() => pop()}>
              <img src="/icons/backButton.svg" alt="" />
            </button>
          ),
        },
        title: <div className="text-Bold40 mt-[0.5rem]">글자크기 조절</div>,
        iconColor: "white",
        height: "5rem",
      }}
    >
      <article className="flex flex-col w-full h-full justify-start items-end"></article>
    </AppScreen>
  );
}
