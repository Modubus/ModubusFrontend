import TextInput from "@src/components/basic/TextInput";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useEffect, useRef, useState } from "react";

// home(버기)1, 버스 검색&등록 페이지
const SearchCodePage: ActivityComponentType = () => {
  const [input, setInput] = useState<string>("");
  const { push } = useDriveFlow();
  const [isShowMatchResult, setIsShowMatchResult] = useState<boolean>(false);
  const [company, setCompany] = useState<string>("");
  const handleBusItemClick = () => {
    push("EnrollBusNumPage", []);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // TODO: api 연동
      setCompany("관악교통");
      setIsShowMatchResult(true);
    }
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <AppScreen backgroundColor="white">
      <article className="w-full h-full flex flex-col items-center px-[2rem] gap-[2.56rem]">
        <TextInput
          className="border-b-[7px] border-black text-[2.8125rem]"
          ref={inputRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {isShowMatchResult && (
          <div
            className="w-full text-left text-Regular45 border-b-[1px] border-b-darkGray3 py-[1rem]"
            onClick={handleBusItemClick}
          >
            {company}
          </div>
        )}
      </article>
    </AppScreen>
  );
};

export default SearchCodePage;
