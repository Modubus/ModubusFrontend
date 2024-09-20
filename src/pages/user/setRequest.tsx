import ReqContent from "@src/components/user/setRequest/reqContent";
import { REQUEST_CONTENTS } from "@src/constant/requestContents";
import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useState } from "react";

export default function SetRequestPage() {
  const { pop, push } = useUserFlow();
  const [contentData, setContentData] = useState(
    REQUEST_CONTENTS.map((content) => ({
      ...content,
      selected: false,
    }))
  );
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
        title: <div className="text-Bold40 mt-[0.5rem]">요청사항 선택</div>,
        iconColor: "white",
        height: "5rem",
      }}
    >
      <article className="mt-[1.31rem] px-[1.25rem]">
        <section className="flex flex-col gap-[1.56rem]">
          {contentData.map((content, idx) => (
            <ReqContent
              setUserInput={(inputTitle: string) => {
                setContentData((prev) => {
                  const updatedContent = [...prev];
                  updatedContent[contentData.length - 1].title = inputTitle; // 복사한 배열에서 값을 수정
                  return updatedContent;
                });
              }}
              onSelect={() => {
                setContentData((prev) =>
                  prev.map((prevContent, prevIdx) =>
                    prevIdx === idx
                      ? { ...prevContent, selected: !prevContent.selected }
                      : prevContent
                  )
                );
              }}
              key={idx}
              content={content}
              userInput={idx == contentData.length - 1}
            ></ReqContent>
          ))}
        </section>
      </article>
      {contentData.filter((content) => content.selected).length > 0 && (
        <button
          onClick={() => push("RequestConfirmPage", {})}
          className="absolute bottom-0 w-full bg-busGreen h-[8rem] flex items-center justify-center text-white text-Bold45"
        >
          선택 완료
        </button>
      )}
    </AppScreen>
  );
}
