import TextInput from "@src/components/basic/TextInput";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useEffect, useRef, useState } from "react";

// home(버기)1, 버스 검색&등록 페이지
const SearchBusNumPage: ActivityComponentType = () => {
  const [input, setInput] = useState<string>("");
  const { push } = useDriveFlow();
  const [isShowMatchResult, setIsShowMatchResult] = useState<boolean>(false);
  const [busNumList, setBusNumList] = useState<string[]>([]);
  const handleBusItemClick = () => {
    push("SubmitBusInfoPage", {});
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  // const fetchMatchBusCompany = async () => {
  //   //TODO: api 연동
  //   renderSearchItem("관악교통");
  // };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setBusNumList(["24나 2324"]);
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
            {busNumList}
          </div>
        )}
      </article>
    </AppScreen>
  );
};

export default SearchBusNumPage;
