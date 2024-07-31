import ImageWrapper from "@src/components/basic/ImageWrapper";
import { ContentType } from "@src/types/user/setRequest/contentType.type";

export default function ReqContent({ content }: { content: ContentType }) {
  return (
    <div className="bg-lightGreen p-[1.19rem] flex gap-[1.06rem] rounded-[0.625rem] text-black">
      <ImageWrapper>
        <img src="/icons/user/setRequest/checked.svg" alt="" />
      </ImageWrapper>
      <div className="flex-1 flex flex-col gap-[0.88rem]">
        <div className="flex gap-[0.44rem]">
          <ImageWrapper>
            <img src={content.iconUrl} alt="" />
          </ImageWrapper>
          <span className="text-Bold21">{content.title}</span>
        </div>
        <div className="text-Regular16 text-start">{content.content}</div>
        {content.warning && (
          <div className="text-Regular12 text-lightRed text-start">
            {content.warning}
          </div>
        )}
      </div>
    </div>
  );
}
