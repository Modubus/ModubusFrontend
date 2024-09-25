import TextInput from "@src/components/basic/TextInput";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useEffect, useRef, useState } from "react";
import { busIdParamsType } from "./searchCode";
import { postBusNum } from "@src/api/driver/post";
import { postBusNumResponse } from "@src/types/api/driver/post.type";

const SearchBusNumPage: ActivityComponentType<busIdParamsType> = ({
  params,
}) => {
  const [input, setInput] = useState<string>("");
  const { push } = useDriveFlow();
  const [isShowMatchResult, setIsShowMatchResult] = useState<boolean>(false);
  const [busNumList, setBusNumList] = useState<postBusNumResponse>([]);
  const handleBusItemClick = (vehicleno: string) => {
    push("SubmitBusInfoPage", {
      id: params.id,
      name: params.name,
      vehicleno: vehicleno,
    });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      const res = await postBusNum({
        busCompanyId: params.id,
        vehicleno: input,
      });
      if (res) {
        setBusNumList(res.data);
        setIsShowMatchResult(true);
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
        {isShowMatchResult &&
          busNumList.map((item) => (
            <div
              className="w-full text-left text-Regular45 border-b-[1px] border-b-darkGray3 py-[1rem]"
              key={item.vehicleno}
              onClick={() => {
                handleBusItemClick(item.vehicleno);
              }}
            >
              {item.vehicleno}
            </div>
          ))}
      </article>
    </AppScreen>
  );
};

export default SearchBusNumPage;
