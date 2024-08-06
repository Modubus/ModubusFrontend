import TextInput from "@src/components/basic/TextInput";
import FilteredBusItem from "@src/components/driver/filteredBusItem";
import { useDriveFlow } from "@src/stackflow/driverStackFlow";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useState } from "react";

// home(버기)1, 버스 검색&등록 페이지
const EnrollBusPage: ActivityComponentType = () => {
  const [input, setInput] = useState("");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const { push } = useDriveFlow();
  const onBusItemClick = (busId: string) => {
    push("BusOngoingPage", { busId: busId });
  };
  return (
    <AppScreen backgroundColor="#121212">
      <article className="h-full">
        <header className="bg-black px-[1.75rem] pt-[0.75rem] pb-[1.44em]">
          <TextInput
            placeholder="버스 번호 검색"
            className="rounded-[0.625rem]"
            value={input}
            onChange={handleChangeInput}
          />
        </header>
        <section className="bg-darkGray h-full flex flex-col gap-[1.6rem]">
          <FilteredBusItem
            onClick={() => {
              onBusItemClick("3317");
            }}
          />
        </section>
      </article>
    </AppScreen>
  );
};

export default EnrollBusPage;
