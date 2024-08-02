import ImageWrapper from "@src/components/basic/ImageWrapper";
import { useUserFlow } from "@src/stackflow/userStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";

export default function LightDisplayPage() {
  const { pop } = useUserFlow();
  return (
    <AppScreen backgroundColor="#121212">
      <article className="flex flex-col w-full h-full justify-start items-end">
        <ImageWrapper className="px-[2rem] mt-[0.94rem]">
          <img onClick={pop} src="/icons/closeButton.svg" alt="" />
        </ImageWrapper>
        <div className="flex-1 w-full text-Bold170 text-green rotate-90 flex justify-start items-center">
          <span>1234</span>
        </div>
      </article>
    </AppScreen>
  );
}
