import { postBusCode } from "@src/api/driver/post";
import TextInput from "@src/components/basic/TextInput";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useEffect, useRef, useState } from "react";

// home(버기)1, 버스 검색&등록 페이지

export type busIdParamsType = {
  id: number;
  name: string;
};

const SearchCodePage: ActivityComponentType = () => {
  const [input, setInput] = useState<string>("");
  const { push } = useDriveFlow();
  const [isShowMatchResult, setIsShowMatchResult] = useState<boolean>(false);
  const [companyName, setCompanyName] = useState<string>("");
  const [companyId, setCompanyId] = useState<number>();
  const handleBusItemClick = () => {
    const busIdParams = { id: companyId, name: companyName } as busIdParamsType;
    push("EnrollBusNumPage", busIdParams);
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const body = { code: input };
      const res = await postBusCode(body);
      if (res && res.data) {
        setIsShowMatchResult(true);
        setCompanyName(res.data.name);
        setCompanyId(res.data.id);
      }
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
            {companyName}
          </div>
        )}
      </article>
    </AppScreen>
  );
};

export default SearchCodePage;
