import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";

export default function SettingPage() {
  const { pop } = useUserFlow();
  return (
    <AppScreen
      backgroundColor="#121212"
      appBar={{
        backButton: {
          render: () => (
            <button className="ms-[2rem] mt-[0.5rem]" onClick={() => pop()}>
              <img src="/icons/backButton.svg" alt="" />
            </button>
          ),
        },
        title: <div className="text-Bold28 text-green mt-[0.5rem]">설정</div>,
        iconColor: "white",
        height: "3rem",
      }}
    >
      <div></div>
    </AppScreen>
  );
}
