import ReqContent from "@src/components/user/setRequest/reqContent";
import { REQUEST_CONTENTS } from "@src/constant/requestContents";
import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";

export default function SetRequestPage() {
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
        title: (
          <div className="text-Bold28 text-green mt-[0.5rem]">
            요청사항 설정
          </div>
        ),
        iconColor: "white",
        height: "3rem",
      }}
    >
      <article className="mt-[1.31rem] px-[2rem]">
        <section className="flex flex-col gap-[1.25rem]">
          {REQUEST_CONTENTS.map((content) => (
            <ReqContent content={content}></ReqContent>
          ))}
        </section>
      </article>
    </AppScreen>
  );
}
