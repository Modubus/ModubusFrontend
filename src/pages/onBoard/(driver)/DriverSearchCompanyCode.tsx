import TextInput from "@src/components/basic/TextInput";
import { useOnBoardFlow } from "@src/stackflow/onBoardStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { useState } from "react";

const DriverSearchCompanyCodePage = () => {
  const [text, setText] = useState("");
  const { push } = useOnBoardFlow();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return (
    <AppScreen backgroundColor="#121212">
      <article className="h-full">
        <header className="bg-black px-[1.75rem] pt-[0.75rem] pb-[1.44em]">
          <TextInput
            placeholder="버스 회사 코드 검색"
            value={text}
            onChange={handleChange}
            className="rounded-[0.625rem]"
          />
        </header>
        <section className="bg-darkGray h-full">
          <div
            onClick={() => {
              push("DriverEnterCompanyCodePage", {
                searchCodeResult: "999",
              });
            }}
          >
            example
          </div>
        </section>
      </article>
    </AppScreen>
  );
};

export default DriverSearchCompanyCodePage;
